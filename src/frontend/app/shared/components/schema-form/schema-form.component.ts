import { AfterContentInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { JsonPointer } from 'angular6-json-schema-form';
import { Subscription } from 'rxjs';

import { safeStringToObj } from '../../../core/utils.service';
import { safeUnsubscribe } from '../../../features/service-catalog/services-helper';

export interface SchemaFormValidationError {
  dataPath: {};
  message: string;
}

export function isValidJsonValidator(): ValidatorFn {
  return (formField: AbstractControl): { [key: string]: any } => {
    try {
      if (formField.value) {
        const jsonObj = JSON.parse(formField.value);
        // Check if jsonObj is actually an obj
        if (jsonObj.constructor !== {}.constructor) {
          throw new Error('not an object');
        }
      }
    } catch (e) {
      return { 'notValidJson': { value: formField.value } };
    }
    return null;
  };
}

export class SchemaFormConfig {
  schema: object;
  initialData: object;
}

@Component({
  selector: 'app-schema-form',
  templateUrl: './schema-form.component.html',
  styleUrls: ['./schema-form.component.scss']
})
export class SchemaFormComponent implements OnInit, OnDestroy, AfterContentInit {

  mode: 'JSON' | 'schema';
  schemaView: 'schemaForm' | 'schemaJson' = 'schemaForm';

  @Input()
  set config(config: SchemaFormConfig) {
    if (!config) {
      return;
    }
    this.cleanSchema = this.filterSchema(config.schema);
    this.mode = this.cleanSchema ? 'schema' : 'JSON';
    if (this.mode === 'JSON') {
      this.setJsonFormData(config.initialData);
    } else if (this.mode === 'schema') {
      // this.formData = config.initialData;
      this.formInitialData = config.initialData;
    }
  }

  @Output()
  dataChange = new EventEmitter<object>();

  @Input()
  valid = false;
  @Output()
  validChange = new EventEmitter<boolean>();

  cleanSchema: object;

  jsonData: object;
  jsonForm: FormGroup;
  jsonChangeSub: Subscription;

  formData: object = {};
  formInitialData: object;
  formValidationErrors: SchemaFormValidationError[];
  formValidationErrorsStr: string;

  ngOnInit() {
    this.jsonForm = new FormGroup({
      json: new FormControl('', isValidJsonValidator()),
    });
  }

  ngAfterContentInit() {
    this.jsonChangeSub = this.jsonForm.controls['json'].valueChanges.subscribe(jsonStr => {
      this.jsonData = safeStringToObj(jsonStr);
      this.dataChange.emit(this.jsonData);
      this.validChange.emit(this.jsonForm.controls['json'].valid);
    });
  }

  ngOnDestroy() {
    safeUnsubscribe(this.jsonChangeSub);
  }

  onSchemaViewChanged() {
    if (this.schemaView === 'schemaForm') {
      // Copy json into form
      this.formInitialData = this.jsonData;
    } else {
      // Copy form into json
      this.setJsonFormData(this.formData);
    }
  }

  setJsonFormData(data: object) {
    if (this.jsonForm) {
      const jsonString = JSON.stringify(data);
      this.jsonForm.controls['json'].setValue(jsonString);
    }
  }

  private filterSchema = (schema?: object): any => {
    if (!schema) {
      return;
    }
    return Object.keys(schema).reduce((obj, key) => {
      if (key !== '$schema') { obj[key] = schema[key]; }
      return obj;
    }, {});
  }

  onFormChange(formData) {
    this.formData = formData;
    this.dataChange.emit(formData);
  }

  onFormValidationErrors(data: SchemaFormValidationError[]): void {
    this.formValidationErrors = data || [];
    this.formValidationErrorsStr = this.prettyValidationErrorsFn(this.formValidationErrors);
    this.validChange.emit(!this.formValidationErrors.length);
  }

  private prettyValidationErrorsFn = (formValidationErrors: SchemaFormValidationError[]): string => {
    if (!formValidationErrors) {
      return null;
    }
    return formValidationErrors.reduce((a, c) => {
      const arrMessage = JsonPointer.parse(c.dataPath).reduce((aa, cc) => {
        const dd = /^\d+$/.test(cc) ? `[${cc}]` : `.${cc}`;
        return aa + dd;
      }, '');
      return `${a} ${arrMessage} ${c.message} <br>`;
    }, '');
  }

}
