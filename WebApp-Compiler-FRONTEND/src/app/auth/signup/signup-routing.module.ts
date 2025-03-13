import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { QuestionairComponent } from './questionair/questionair.component';
import { StudentPortalComponent } from 'src/app/student/student-portal/student-portal.component';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { AddPlacementUserComponent } from './add-placement-user/add-placement-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = 
[
  {
    path:"user",component:UserComponent
  },
  {
    path:"questionnaire",component:QuestionairComponent
  },
  {
    path:"student-portal",component:StudentportalComponent
  },
  {
    path:"placement-portal",component:AddPlacementUserComponent
  },
  {
    path:"admin-portal",component:AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
