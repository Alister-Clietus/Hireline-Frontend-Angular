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
  
toggleJobsunverified() {
  this.showJobs2 = !this.showJobs2;}

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void 
  {
    this.getJobDetails()
  }

  getJobDetails()
  {
    const getjoburl="http://127.0.0.1:8098/placement-admin/fetch-emails";
        this.httpservice.getbyurlOnly(getjoburl).subscribe((item: any)=>
        {
          if (item)
          {
            console.log(item)
          }
          else
          {
            Swal.fire("Fail!");
            if (item.details)
            {
              Swal.fire("Validation Error!");
              item.details.forEach(element =>
                {
                var key = Object.keys(element)[0];
              });
            }
          }
        },
        error=>
        {
          if(error.status == "400")
          {
          let msg = "";
          error.error.details.forEach(element =>
            {
              msg = msg + element + "<br>"
            });
            Swal.fire("Error!");
          }
        })
  }

  showJobs: boolean = false;
  showJobs2: boolean = false;

  // Example job data
  jobs = [
    {
      title: 'Software Developer',
      description: 'We are looking for a passionate developer to join our team and work on exciting projects.',
      companyLink: '#',
    },
    {
      title: 'Data Analyst',
      description: 'Analyze and interpret data to provide insights and recommendations for business growth.',
      companyLink: '#',
    },
    {
      title: 'UI/UX Designer',
      description: 'Design user-friendly interfaces and enhance the overall user experience.',
      companyLink: '#',
    },
  ];

  // Toggle job visibility
  toggleJobs() {
    this.showJobs = !this.showJobs;
  }

}
