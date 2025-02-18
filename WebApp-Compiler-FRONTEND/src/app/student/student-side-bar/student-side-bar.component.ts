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
  selector: 'app-student-side-bar',
  templateUrl: './student-side-bar.component.html',
  styleUrls: ['./student-side-bar.component.css']
})

export class StudentSideBarComponent implements OnInit 
{

constructor(private router: Router,private logoutt:LogoutService,private httpservice: HttpService,private tokenservice: TokenserviceService,private timer:TimerService,private visitedroutes:RouteVisitService,private fullscreenservice:FullScreenService) { }


// takeTestFromStudentPortal() 
// {
//   if(this.tokenservice.getSubmit()==="YES")
//           {
//             Swal.fire({
//               toast: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 1000,
//               icon: "warning",
//               title: "Exam Submitted ",
//             })
//           }
//           else{
//             this.timer.startTimer();
//                       Swal.fire({
//                         toast: true,
//                         position: "top-end",
//                         showConfirmButton: false,
//                         timer: 1000,
//                         icon: "success",
//                         title: "STUDENT LOGGED IN",
//                       })
//                       this.router.navigate(['../student/landing'],{skipLocationChange:true});
//           }
// }
takeTestFromStudentPortal() {
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to start the test?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Start!",
    cancelButtonText: "Cancel"
  }).then((result) => {
    if (result.isConfirmed) {
      // Proceed with existing logic
      if (this.tokenservice.getSubmit() === "YES") {
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "warning",
          title: "Exam Submitted",
        });
      } else {
        this.timer.startTimer();
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
          title: "STUDENT LOGGED IN",
        });
        this.router.navigate(["../student/landing"], { skipLocationChange: true });
      }
    }
  });
}

companyDetails() 
{
  this.router.navigate(['./student/companey-details'],{skipLocationChange:true});
}
resumeChecker() 
{
  this.router.navigate(['./student/resume-checker'],{skipLocationChange:true});
}
  listChamptions() {
    this.router.navigate(['./student/champion'],{skipLocationChange:true});
    }
    studentDetails() 
    {
      this.router.navigate(['./student/profile-details'],{skipLocationChange:true});
    }
    jobAlerts() 
    {
      this.router.navigate(['./student/jobalerts'],{skipLocationChange:true});
    }
      isSidebarOpen: boolean = false;
    
    
      ngOnInit(): void 
      {
    
      }
    
      toggleSidebar() 
      {
        this.isSidebarOpen = !this.isSidebarOpen;
      }
      
      goToDashboard() 
      {
        this.router.navigate(['./student/student-dashboard'],{skipLocationChange:true});
      }

      downloadFile() 
      {
        this.router.navigate(['./student/download'],{skipLocationChange:true});
      }
      uploadFile() 
      {
        this.router.navigate(['./student/upload'],{skipLocationChange:true});
      }
      openSettings() 
      {
        this.router.navigate(['./student/settings'],{skipLocationChange:true});
      }
      logout() {
        this.logoutt.logoutt();
      }

}
