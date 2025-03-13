import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { UserComponent } from './user/user.component';
import { QuestionairComponent } from './questionair/questionair.component';
import { FormsModule } from '@angular/forms';
import { StudentportalComponent } from './studentportal/studentportal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddPlacementUserComponent } from './add-placement-user/add-placement-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [UserComponent, QuestionairComponent, StudentportalComponent, SidebarComponent, AddPlacementUserComponent, AdminLoginComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule
  ]
})
export class SignupModule { }
