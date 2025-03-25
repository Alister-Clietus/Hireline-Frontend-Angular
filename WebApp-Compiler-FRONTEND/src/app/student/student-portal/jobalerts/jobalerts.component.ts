import { Component, OnInit } from '@angular/core';
import { JobDTO } from 'src/app/models/job-dto';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jobalerts',
  templateUrl: './jobalerts.component.html',
  styleUrls: ['./jobalerts.component.css']
})
export class JobalertsComponent implements OnInit 
{

  
    verify(job: JobDTO) 
    {
      const url = "http://localhost:8098/placement/verify-job";
      this.httpservice.postdata(url, job).subscribe
      (
        (response: any) => {
          if (response && response.code === "Success") 
          {
            Swal.fire("Success!", "Job Verified successfully", "success");
            this.getJobDetails();
            this.getVerifiedJobDetails() // Refresh job list
          } 
          else 
          {
            Swal.fire("Fail!", "Unable to delete job", "error");
          }
        },
        (error) => {
          Swal.fire("Error!", "Something went wrong. Please try again.", "error");
        }
      );
    }
  
    deleteJob(job: JobDTO) 
    {
      const url = "http://localhost:8098/placement/delete-job";
      this.httpservice.postdata(url, job).subscribe
      (
        (response: any) => 
        {
          if (response && response.code === "Success") 
          {
            Swal.fire("Success!", "Job deleted successfully", "success");
            this.getJobDetails();
            this.getVerifiedJobDetails() // Refresh job list
          } 
          else 
          {
            Swal.fire("Fail!", "Unable to delete job", "error");
          }
        },
        (error) => {
          Swal.fire("Error!", "Something went wrong. Please try again.", "error");
        }
      );
    }
    
  
    jobs: any[] = [];
    verifiedjobs: any[] = [];
  
    toggleJobsunverified() 
    {
      this.showJobs2 = !this.showJobs2;
    }
  
    constructor(private httpservice: HttpService) { }
  
    ngOnInit(): void 
    {
      this.getJobDetails();
      this.getVerifiedJobDetails();
    }
  
    getJobDetails() 
    {
      const getjoburl = "http://127.0.0.1:8098/placement/get-alljob";
      this.httpservice.getbyurlOnly(getjoburl).subscribe(
        (response: any) => 
        {
          if (response && response.code === "Success" && response.details && response.details.aaData) {
            this.jobs = response.details.aaData; // Assigning aaData array to job variable
            console.log(this.jobs); // Log job data
            Swal.fire("Success!", "Job data available", "success");
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
  
    getVerifiedJobDetails() 
    {
      const getjoburl = "http://127.0.0.1:8098/placement/get-verified-jobs";
      this.httpservice.getbyurlOnly(getjoburl).subscribe(
        (response: any) => 
        {
          if (response && response.code === "Success" && response.details && response.details.aaData) 
            {
            Swal.fire("Success!", "Verified Job data available", "success");
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
    showJobs: boolean = false;
    showJobs2: boolean = false;
  
    toggleVerifiedJobs() 
    {
      this.showJobs = !this.showJobs;
    }

    confirmApply(job: any) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to mark this job as applied?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, apply!',
        cancelButtonText: 'No, cancel!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.markAsApplied(job);
          Swal.fire('Applied!', 'The job has been marked as applied.', 'success');
        }
      });
    }
  
    markAsApplied(job: any) {
      job.applied = true;
    }

}
