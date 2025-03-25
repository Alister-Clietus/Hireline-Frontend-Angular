import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  verifiedjobs: any;
  jobs: any;

  constructor(private httpservice: HttpService) 
  {

  }
  ngOnInit(): void 
  {
    this.getComapnyStatics();
    this.getJobStatics();
  }

    getComapnyStatics() 
    {
      const getjoburl = "http://localhost:8098/placement/get-company-statistics";
      this.httpservice.getbyurlOnly(getjoburl).subscribe(
        (response: any) => 
        {
          if (response && response.code === "Success" && response.details && response.details.aaData) 
            {
              Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Verified Job data available',
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000, // Duration in milliseconds (3 seconds)
                timerProgressBar: true,
              });                       
              this.verifiedjobs = response.details.aaData; // Assigning aaData array to job variable
            console.log(this.verifiedjobs); // Log job data
          } else {
            Swal.fire("Fail!", "No job data available", "error");
          }
        },
        (error) => 
        {
          if (error.status === 400 && error.error.details) {
            let msg = error.error.details.join("<br>"); // Joining error messages
            Swal.fire("Validation Error!", msg, "error");
          } else {
            Swal.fire("Error!", "Something went wrong. Please try again.", "error");
          }
        }
      );
    }

    getJobStatics() 
    {
      const getjoburl = "http://localhost:8098/placement/get-job-statitics";
      this.httpservice.getbyurlOnly(getjoburl).subscribe(
        (response: any) => 
        {
          if (response && response.code === "Success" && response.details && response.details.aaData) 
            {
              Swal.fire
              ({
                toast: true,
                icon: 'success',
                title: 'Verified Job data available',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000, // Duration in milliseconds (3 seconds)
                timerProgressBar: true,
              });
                          this.jobs = response.details.aaData; // Assigning aaData array to job variable
            console.log(this.verifiedjobs); // Log job data
          } else {
            Swal.fire("Fail!", "No job data available", "error");
          }
        },
        (error) => 
        {
          if (error.status === 400 && error.error.details) {
            let msg = error.error.details.join("<br>"); // Joining error messages
            Swal.fire("Validation Error!", msg, "error");
          } else {
            Swal.fire("Error!", "Something went wrong. Please try again.", "error");
          }
        }
      );
    }

}
