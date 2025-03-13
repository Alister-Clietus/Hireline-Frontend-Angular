import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FullScreenService } from 'src/app/service/full-screen.service';
import { HttpService } from 'src/app/service/http.service';
import { LogoutService } from 'src/app/service/logout.service';
import { RouteVisitService } from 'src/app/service/route-visit.service';
import { TimerService } from 'src/app/service/timer.service';
import { TokenserviceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit 
{
adminLogin() {
  this.router.navigate(['./auth/signup/admin-portal'],{skipLocationChange:true});
}
studentPortallogin() {
  this.router.navigate(['./auth/signup/student-portal'],{skipLocationChange:true});
}
placmentAdminLogin() {
  this.router.navigate(['./auth/signup/placement-portal'],{skipLocationChange:true});
}
questionnairLogin() {
  this.router.navigate(['./auth/signup/questionnaire'],{skipLocationChange:true});
}
examLogin() {
  this.router.navigate(['./auth/signup/user'],{skipLocationChange:true});
}

constructor(private router: Router,private logoutt:LogoutService,private httpservice: HttpService,private tokenservice: TokenserviceService,private timer:TimerService,private visitedroutes:RouteVisitService,private fullscreenservice:FullScreenService) { }

      isSidebarOpen: boolean = false;
    
    
      ngOnInit(): void 
      {
    
      }
    
      toggleSidebar() 
      {
        this.isSidebarOpen = false
      }

      logout() {
        this.logoutt.logoutt();
      }

}

