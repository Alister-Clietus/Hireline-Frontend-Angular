import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/service/logout.service';

@Component({
  selector: 'app-placement-sidebar',
  templateUrl: './placement-sidebar.component.html',
  styleUrls: ['./placement-sidebar.component.css']
})
export class PlacementSidebarComponent implements OnInit {


  isSidebarOpen: boolean = false;

  constructor(private router: Router,private logoutt:LogoutService) { }

  ngOnInit(): void 
  {

  }

  toggleSidebar() 
  {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  goToDashboard() 
  {
    this.router.navigate(['./admin/admin-dashboard'],{skipLocationChange:true});
  }
  openSettings() 
  {
    this.router.navigate(['./admin/settings'],{skipLocationChange:true});
  }
  logout() 
  {
    this.logoutt.logoutt();
  }
// This is the function for Uploading file
  downloadandUploadFile() 
  {
    this.router.navigate(['./admin/dwn-upld'],{skipLocationChange:true});
  }
  companyDetails() 
  {
    this.router.navigate(['./admin/company-details'],{skipLocationChange:true});
  }
  listChamptions() 
  {
    this.router.navigate(['./admin/champion'],{skipLocationChange:true});
  }
  studentDetails() 
  {
    this.router.navigate(['./admin/student-details'],{skipLocationChange:true});
  }
  jobAlerts() 
  {
    this.router.navigate(['./admin/job-alert'],{skipLocationChange:true});
  }
  download() 
  {
    this.router.navigate(['./admin/download'],{skipLocationChange:true});
    }

}
