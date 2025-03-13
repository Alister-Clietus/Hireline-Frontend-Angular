import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { ProgrammingComponent } from './programming/programming.component';
import { McqComponent } from './mcq/mcq.component';
import { QuestionSidebarComponent } from './question-sidebar/question-sidebar.component';
import { ShowQuestionsComponent } from './show-questions/show-questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowPrgQuestionsComponent } from './show-prg-questions/show-prg-questions.component';
import { DownloadComponent } from './download/download.component';
import { UploadComponent } from './upload/upload.component';
import { QuestionairComponent } from './questionair/questionair.component';


@NgModule({
  declarations: [AddComponent, ProgrammingComponent, McqComponent, QuestionSidebarComponent, ShowQuestionsComponent, DashboardComponent, ShowPrgQuestionsComponent, DownloadComponent, UploadComponent, QuestionairComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    FormsModule
  ]
})
export class QuestionnaireModule { }
