import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit 
{

  constructor(private httpservice: HttpService) { }
  studentData: any[] = [];
  ngOnInit(): void 
  {
    this.getRankDetails()
  }

    getRankDetails() 
    {
      const getjoburl = "http://127.0.0.1:8087/student/get-rank-list";
      this.httpservice.getbyurlOnly(getjoburl).subscribe(
        (response: any) => 
        {
          if (response && response.aaData!=null) {
            this.studentData  = response.aaData; // Assigning aaData array to job variable
            Swal.fire("Success!", "Rank data available", "success");
          } else {
            Swal.fire("Fail!", "No Rank data available", "error");
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
