import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ProgrammingComponent } from './programming/programming.component';
import { McqComponent } from './mcq/mcq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { ShowPrgQuestionsComponent } from './show-prg-questions/show-prg-questions.component';
import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';
import { QuestionairComponent } from './questionair/questionair.component';


const routes: Routes = 
[
  {
    path:"",component:DashboardComponent
  },
  {
    path:"addquestion",component:AddComponent
  },
  {
    path:"prg/:questionid",component:ProgrammingComponent
  },
  {
    path:"mcq/:questionid",component:McqComponent
  },
  {
    path:"show-all-questions",component:ShowQuestionsComponent
  },
  {
    path:"show-prg-questions",component:ShowPrgQuestionsComponent
  },
  {
    path:"download",component:DownloadComponent
  },
  {
    path:"upload",component:UploadComponent
  },
  {
    path:"add-questionnair",component:QuestionairComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
