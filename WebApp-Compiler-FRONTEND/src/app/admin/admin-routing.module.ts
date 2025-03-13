import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../superadmin/sidebar/sidebar.component';
import { PlacementSidebarComponent } from './placement-sidebar/placement-sidebar.component';
import { PlacementAdminComponent } from './placement-admin/placement-admin.component';
import { ChampionComponentComponent } from './champion-component/champion-component.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddJobAlertComponent } from './add-job-alert/add-job-alert.component';
import { AddCompanyDetailsComponent } from './add-company-details/add-company-details.component';
import { AddPlacementUserComponent } from './add-placement-user/add-placement-user.component';


const routes: Routes = 
[
  {path:"sidebar-admin",component:PlacementSidebarComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"job-alert",component:PlacementAdminComponent},
  {path:"add-job-alert",component:AddJobAlertComponent},
  {path:"company-details",component:CompanyDetailsComponent},
  {path:"add-company-details",component:AddCompanyDetailsComponent},
  {path:"add-placement-user",component:AddPlacementUserComponent},
  {path:"champion",component:ChampionComponentComponent},
  {path:"settings",component:SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
