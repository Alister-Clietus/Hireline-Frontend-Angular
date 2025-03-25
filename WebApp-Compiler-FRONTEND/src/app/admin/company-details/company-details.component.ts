import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/app/models/company-dto';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit 
{

  markPending(companydto: CompanyDTO) 
    {
      const url = "http://localhost:8098/placement/pending-company";
      this.httpservice.postdata(url, companydto).subscribe
      (
        (response: any) => {
          if (response && response.code === "Success") 
          {
            Swal.fire("Success!", "Job Verified successfully", "success");
            this.getCompanyDetails();
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

  deleteCompany(companydto: CompanyDTO) 
    {
      const url = "http://localhost:8098/placement/delete-company";
      this.httpservice.postdata(url, companydto).subscribe
      (
        (response: any) => {
          if (response && response.code === "Success") 
          {
            Swal.fire("Success!", "Job Verified successfully", "success");
            this.getCompanyDetails();
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

  companies: any[] = [];

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void 
  {
    this.getCompanyDetails()
  }

    getCompanyDetails() 
    {
      const getjoburl = "http://localhost:8098/placement/get-company";
      this.httpservice.getbyurlOnly(getjoburl).subscribe(
        (response: any) => 
        {
          if (response && response.code === "Success" && response.details && response.details.aaData) {
            this.companies = response.details.aaData; // Assigning aaData array to job variable
            console.log(this.companies); // Log job data
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

  verifyCompany(companydto: CompanyDTO) 
  {
    const url = "http://localhost:8098/placement/verify-company";
    this.httpservice.postdata(url, companydto).subscribe
    (
      (response: any) => {
        if (response && response.code === "Success") 
        {
          Swal.fire("Success!", "Job Verified successfully", "success");
          this.getCompanyDetails();
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


}
