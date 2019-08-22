import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of as observableOf } from 'rxjs';

import {
  ApplicationStateIconComponent,
} from '../../../../../../core/src/shared/components/application-state/application-state-icon/application-state-icon.component';
import {
  ApplicationStateIconPipe,
} from '../../../../../../core/src/shared/components/application-state/application-state-icon/application-state-icon.pipe';
import {
  PollingIndicatorComponent,
} from '../../../../../../core/src/shared/components/polling-indicator/polling-indicator.component';
import { EntityMonitorFactory } from '../../../../../../core/src/shared/monitors/entity-monitor.factory.service';
import { PaginationMonitorFactory } from '../../../../../../core/src/shared/monitors/pagination-monitor.factory';
import {
  generateCfBaseTestModulesNoShared,
} from '../../../../../test-framework/cloud-foundry-endpoint-service.helper';
import { ActiveRouteCfOrgSpace } from '../../../../features/cloud-foundry/cf-page.types';
import { CloudFoundryEndpointService } from '../../../../features/cloud-foundry/services/cloud-foundry-endpoint.service';
import { CfUserService } from '../../../data-services/cf-user.service';
import { CardCfRecentAppsComponent } from './card-cf-recent-apps.component';
import { CompactAppCardComponent } from './compact-app-card/compact-app-card.component';

describe('CardCfRecentAppsComponent', () => {
  let component: CardCfRecentAppsComponent;
  let fixture: ComponentFixture<CardCfRecentAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardCfRecentAppsComponent,
        ApplicationStateIconComponent,
        CompactAppCardComponent,
        PollingIndicatorComponent,
        ApplicationStateIconPipe
      ],
      imports: generateCfBaseTestModulesNoShared(),
      providers: [
        CloudFoundryEndpointService,
        ActiveRouteCfOrgSpace,
        EntityMonitorFactory,
        CfUserService,
        PaginationMonitorFactory
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCfRecentAppsComponent);
    component = fixture.componentInstance;
    component.allApps$ = observableOf([]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
