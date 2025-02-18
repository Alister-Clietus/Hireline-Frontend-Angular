import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingComponent } from './programming/programming.component';
import { LandingComponent } from './landing/landing.component';
import { McqComponent } from './mcq/mcq.component';
import { ProgrammingLandingComponent } from './programming-landing/programming-landing.component';
import {IsmcqGuard} from '../service/gurad/ismcq.guard';
import { ProgrammingGuard } from '../service/gurad/programming.guard';
import { VisitedroutesGuard } from '../service/gurad/visitedroutes.guard';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SubmitpageComponent } from './submitpage/submitpage.component';
import { SubmitGuard } from '../service/gurad/submit.guard';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { ChampionComponent } from './student-portal/champion/champion.component';
import { JobalertsComponent } from './student-portal/jobalerts/jobalerts.component';
import { ResumeCheckerComponent } from './student-portal/resume-checker/resume-checker.component';
import { ProfileDetailsComponent } from './student-portal/profile-details/profile-details.component';
import { StudentDashboardComponent } from './student-portal/student-dashboard/student-dashboard.component';
import { StudentSideBarComponent } from './student-side-bar/student-side-bar.component';
import { UploadComponent } from './student-portal/upload/upload.component';
import { CompanyDetailsComponent } from './student-portal/company-details/company-details.component';
import { DownloadComponent } from './student-portal/download/download.component';
import { SettingsComponent } from './student-portal/settings/settings.component';



const routes: Routes = [
{path:"landing",component:LandingComponent,canActivate: [SubmitGuard]},
{path:"mcq",component:McqComponent,canActivate: [IsmcqGuard,SubmitGuard]},
{path:"programmingLanding",component:ProgrammingLandingComponent,canActivate: [ProgrammingGuard,SubmitGuard]},
{path:"programming/:selectedQuestionId/:selectedQuestion/:selectedQuestionHeading",component:ProgrammingComponent,canActivate: [SubmitGuard]},
{path:"thankyou",component:ThankyouComponent},
{path:"submitpage",component:SubmitpageComponent},

{path:"student-sidebar",component:StudentSideBarComponent},
{path:"student-portal",component:StudentPortalComponent},
{path:"student-dashboard",component:StudentDashboardComponent},
{path:"profile-details",component:StudentPortalComponent},
{path:"resume-checker",component:ResumeCheckerComponent},
{path:"settings",component:SettingsComponent},
{path:"champion",component:ChampionComponent},
{path:"jobalerts",component:JobalertsComponent},
{path:"download",component:DownloadComponent},
{path:"upload",component:UploadComponent},
{path:"companey-details",component:CompanyDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
