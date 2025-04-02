import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { TokenserviceService } from 'src/app/service/token.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {
  selectedemailid: any;
  studentData: any = {}; // Property to hold the response data

  constructor(private router: Router,private route: ActivatedRoute,private http:HttpService,private tokenservice: TokenserviceService) 
  {
    this.selectedemailid = window.atob(this.route.snapshot.paramMap.get('selectedemailid'));
   }

  ngOnInit(): void 
  {
    this.getdata();
  }

  getdata() {
    this.tokenservice.getGmail();
    console.log(this.tokenservice.getGmail()) // Use the decoded email from the route parameter
    const url = `http://127.0.0.1:8085/register/getstudentportalbyemail/${this.tokenservice.getGmail()}`;
    
    this.http.getbyurlOnly(url).subscribe(
      (item: any) => {
        // Handle the response here
        this.studentData = item;
        console.log('Data fetched successfully:', item);
      },
      error => {
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "error",
          title: "Error",
        });
      }
    );
  }

}
