import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-placement-admin',
  templateUrl: './placement-admin.component.html',
  styleUrls: ['./placement-admin.component.css']
})
export class PlacementAdminComponent implements OnInit 
{
  jobs: any[] = []; // Declare the job array

toggleJobsunverified() 
{
  this.showJobs2 = !this.showJobs2;}

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void 
  {
    this.getJobDetails()
  }

  getJobDetails() {
    const getjoburl = "http://127.0.0.1:8098/placement/get-alljob";
    
    this.httpservice.getbyurlOnly(getjoburl).subscribe(
      (response: any) => {
        if (response && response.code === "Success" && response.details && response.details.aaData) {
          this.jobs = response.details.aaData; // Assigning aaData array to job variable
          console.log(this.jobs); // Log job data
        } else {
          Swal.fire("Fail!", "No job data available", "error");
        }
      },
      (error) => {
        if (error.status === 400 && error.error.details) {
          let msg = error.error.details.join("<br>"); // Joining error messages
          Swal.fire("Validation Error!", msg, "error");
        } else {
          Swal.fire("Error!", "Something went wrong. Please try again.", "error");
        }
      }
    );
  }

  showJobs: boolean = false;
  showJobs2: boolean = false;


  // Toggle job visibility
  toggleJobs() 
  {
    this.showJobs = !this.showJobs;
  }

}
