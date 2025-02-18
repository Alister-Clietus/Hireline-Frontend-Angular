import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PlacementAdminComponent } from './placement-admin/placement-admin.component';
import { PlacementSidebarComponent } from './placement-sidebar/placement-sidebar.component';
import { ChampionComponentComponent } from './champion-component/champion-component.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DwnUpldComponent } from './dwn-upld/dwn-upld.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { DownloadComponent } from './download/download.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlacementAdminComponent, PlacementSidebarComponent, ChampionComponentComponent, AdminDashboardComponent, StudentDetailsComponent, DwnUpldComponent, CompanyDetailsComponent, DownloadComponent, SettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
