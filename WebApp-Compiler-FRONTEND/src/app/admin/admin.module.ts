import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PlacementAdminComponent } from './placement-admin/placement-admin.component';
import { PlacementSidebarComponent } from './placement-sidebar/placement-sidebar.component';
import { ChampionComponentComponent } from './champion-component/champion-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { AddJobAlertComponent } from './add-job-alert/add-job-alert.component';
import { AddCompanyDetailsComponent } from './add-company-details/add-company-details.component';
import { AddPlacementUserComponent } from './add-placement-user/add-placement-user.component';


@NgModule({
  declarations: [PlacementAdminComponent, PlacementSidebarComponent, ChampionComponentComponent, AdminDashboardComponent, CompanyDetailsComponent, SettingsComponent, AddJobAlertComponent, AddCompanyDetailsComponent, AddPlacementUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
