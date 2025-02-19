import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ProgrammingComponent } from './programming/programming.component';
import { McqComponent } from './mcq/mcq.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { ProgrammingLandingComponent } from './programming-landing/programming-landing.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';
import { SubmitpageComponent } from './submitpage/submitpage.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { StudentSideBarComponent } from './student-side-bar/student-side-bar.component';
import { ChampionComponent } from './student-portal/champion/champion.component';
import { JobalertsComponent } from './student-portal/jobalerts/jobalerts.component';
import { StudentDashboardComponent } from './student-portal/student-dashboard/student-dashboard.component';
import { ProfileDetailsComponent } from './student-portal/profile-details/profile-details.component';
import { SettingsComponent } from './student-portal/settings/settings.component';
import { ResumeCheckerComponent } from './student-portal/resume-checker/resume-checker.component';
import { CompanyDetailsComponent } from './student-portal/company-details/company-details.component';
import { DownloadComponent } from './student-portal/download/download.component';
import { UploadComponent } from './student-portal/upload/upload.component';
import { ChatComponent } from './student-portal/chat/chat.component';


@NgModule({
  declarations: [ProgrammingComponent, McqComponent, LandingComponent, ProgrammingLandingComponent, TimerComponent, HeaderComponent, SubmitpageComponent, ThankyouComponent, StudentPortalComponent, StudentSideBarComponent, ChampionComponent, JobalertsComponent, StudentDashboardComponent, ProfileDetailsComponent, SettingsComponent, ResumeCheckerComponent, CompanyDetailsComponent, DownloadComponent, UploadComponent, ChatComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
  ]
})
export class StudentModule { }
