import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../superadmin/sidebar/sidebar.component';
import { PlacementSidebarComponent } from './placement-sidebar/placement-sidebar.component';
import { PlacementAdminComponent } from './placement-admin/placement-admin.component';
import { ChampionComponentComponent } from './champion-component/champion-component.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DwnUpldComponent } from './dwn-upld/dwn-upld.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DownloadComponent } from './download/download.component';


const routes: Routes = 
[
  {path:"sidebar-admin",component:PlacementSidebarComponent},
  {path:"",component:AdminDashboardComponent},
  {path:"job-alert",component:PlacementAdminComponent},
  {path:"student-details",component:StudentDetailsComponent},
  {path:"company-details",component:CompanyDetailsComponent},
  {path:"champion",component:ChampionComponentComponent},
  {path:"dwn-upld",component:DwnUpldComponent},
  {path:"download",component:DownloadComponent},
  {path:"settings",component:SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
