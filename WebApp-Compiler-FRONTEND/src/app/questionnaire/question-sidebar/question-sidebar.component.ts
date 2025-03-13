import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/service/logout.service';
import { TokenserviceService } from 'src/app/service/token.service';

@Component({
  selector: 'app-question-sidebar',
  templateUrl: './question-sidebar.component.html',
  styleUrls: ['./question-sidebar.component.css']
})
export class QuestionSidebarComponent implements OnInit 
{
  constructor(private router: Router,private token:TokenserviceService,private logoutt:LogoutService) { }
  isSidebarOpen: boolean = false;
  username: any;

  downloadFile() 
  {
    this.router.navigate(['./question/download'],{skipLocationChange:true});
  }

  addQuestionair() 
  {
    this.router.navigate(['./question/add-questionnair'],{skipLocationChange:true});
  }

  uploadFile() 
  {
    this.router.navigate(['./question/upload'],{skipLocationChange:true});
  }

  listQuestions() 
  {
    this.router.navigate(['./question/show-all-questions'],{skipLocationChange:true});
  }

  goToDashboard() 
  {
    this.router.navigate(['./question'],{skipLocationChange:true});
  }

  ngOnInit(): void 
  {
    this.username=this.token.getUsername()
  }

  toggleSidebar() 
  {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logOut()
  {
    this.logoutt.logoutt();

  }

  addQuestion()
  {
    this.router.navigate(['./question/addquestion'],{skipLocationChange:true});

  }

  codeBase()
  {
    this.router.navigate(['./question/show-prg-questions'],{skipLocationChange:true});

  }


}
