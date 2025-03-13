import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyDTO } from 'src/app/models/company-dto';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-company-details',
  templateUrl: './add-company-details.component.html',
  styleUrls: ['./add-company-details.component.css']
})
export class AddCompanyDetailsComponent implements OnInit 
{
validationMessage: any;
companydto:CompanyDTO = new CompanyDTO()
questiondto: any;

  clear() 
  {
    this.companydto=new CompanyDTO()
  }
  submitCompany() 
  {
    this.validationMessage = {};
        this.httpservice.postdata("http://localhost:8098/placement/add-company",this.companydto).subscribe((item: any)=>
        {
          this.clear()
          if (item.code.toLowerCase() == "success") 
          {
            Swal.fire({
              background: "#2ecc71",
              color:"#fff",
              toast: true,
              position: "center",
              showConfirmButton: false,
              timer: 2000,
              icon: "success",
              title: "Added Successfully",
              iconColor: "#fff"
            })    
            this.clear()    
          }
          else 
          {
            
            if (item.details) 
            {
              Swal.fire({
                background: "red",
                color: "#fff",
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                icon: "error",
                title: "Validation Error",
                iconColor: "#fff"
              })        
    
              item.details.forEach(element => 
                {
                var key = Object.keys(element)[0];
                this.validationMessage[key] = element[key];
              Swal.fire({
                background: "red",
                color: "#fff",
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 2000,
                icon: "error",
                title: "Error",
                iconColor: "#fff"
              })       
                  
            });
            }        
          }
        },
        error=>
        {
          this.clear()
          if(error.status == "400")
          {
          let msg = "";
          error.error.details.forEach(element => 
            {
              msg = msg + element + "<br>"
            });
            Swal.fire({
              background: "red",
              color: "#fff",
              toast: true,
              position: "center",
              showConfirmButton: false,
              timer: 2000,
              icon: "error",
              title: "Verification Failed",
              iconColor: "#fff"
            })      
          }
        })
  }

  constructor(private httpservice: HttpService,private router: Router) { }

  ngOnInit(): void 
  {

  }

}
