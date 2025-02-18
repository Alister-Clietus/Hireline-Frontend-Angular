import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { QuestionairComponent } from './questionair/questionair.component';
import { StudentPortalComponent } from 'src/app/student/student-portal/student-portal.component';
import { StudentportalComponent } from './studentportal/studentportal.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
