import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminSetting } from 'src/app/models/admin-setting';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2'


declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  adminsettings:AdminSetting= new AdminSetting()
  programmingLanguagelist: any;

    constructor(private router: Router,private http:HttpService) { }

  public totalquestions: number;
  public mcqquestions: number;
  public programmingquestions: number;
  public studentsattended: number;
  public studentsregistred: number;
  public admin: number;
  public numberofmcqforstudents: number;
  public numberOfPrgForStudents: number;
  public questionair: number;
  ngOnInit(): void 
  {
    this.getdatascategoryProgram()
    this.datatable1();
    this.datatable2();
    this.datatable3();
    this.datatable4();
    this.assignData();
    this.tabchanged()
  }

  datatable1()
  {
    $('#employeenoquestion').DataTable( {
      searching: true, 
      scrollY: '200px',  // Set the vertical scrolling height as needed
      scrollCollapse: true,
      ajax: {
          url: 'http://localhost:8085/dashboard/getdetails',
          dataSrc: 'employee'
      },
      columns: [
        { data: 'employeeid', title: 'EmployeeID' },
        { data: 'noofquestions', title: 'Questions' }
      ],
  } );
  }

  datatable2()
  {
    $('#studentmark').DataTable( {
      searching: true, 
      scrollY: '200px',  // Set the vertical scrolling height as needed
      scrollCollapse: true,
      ajax: {
          url: 'http://localhost:8085/dashboard/getdetails',
          dataSrc: 'student'
      },
      columns: [
        { data: 'username', title: 'StudentID' },
        { data: 'totalmarks', title: 'Mark' }
      ],
  } );
  }

  datatable3()
  {
    $('#trial1').DataTable( {

      ajax: {
          url: 'http://localhost:8085/dashboard/getdetails',
          dataSrc: 'student2'
      },
      columns: [
        { data: 'username', title: 'USERNAME'},
        { data: 'status', title: 'STATUS'}
      ],
      searching: true, 
      paging: false,
      scrollY: '200px',  // Set the vertical scrolling height as needed
      scrollCollapse: true
  } );
  }

  datatable4()
  {
    $('#trial2').DataTable( {
      ajax: {
          url: 'http://localhost:8085/dashboard/getdetails',
          dataSrc: 'student3'
      },
      columns: [
        { data: 'username', title: 'USERNAME' },
        { data: 'role', title: 'ROLE' }
      ],
      searching: false, 
      paging: false,
      scrollY: '200px',  // Set the vertical scrolling height as needed
      scrollCollapse: true
  } );
  }

  tabchanged()
  {
    $('#tabchanged').DataTable( {
      searching: true, 
      scrollY: '200px',  // Set the vertical scrolling height as needed
      scrollCollapse: true,
      ajax: {
          url: 'http://localhost:8085/dashboard/getdetails',
          dataSrc: 'TabSwitched'
      },
      columns: [
        { data: 'username', title: 'USERNAME' ,"sTitle": "Username"},
        { data: 'timer', title: 'TabSwitched',"sTitle": "Timer" },
        { data: 'tabchanged', title: 'Timer' }
      ],

  } );
  }

  assignData()
  {
    this.http.getbyurlOnly("http://localhost:8085/dashboard/getdetails").subscribe((item: any)=>
    {
      this.totalquestions=item.allquestions
      this.mcqquestions=item.mcqquestions
      this.programmingquestions=item.programquestions
      this.studentsattended=20
      this.studentsregistred=item.noofstudents
      this.admin=item.noofadmin
      this.numberofmcqforstudents=30
      this.numberOfPrgForStudents=5
      this.questionair=item.noofquestionair;
    },
    error=>
    {
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        icon: "error",
        title: "Error",
      }) 
    })

  }
// ADD CATEGORY PROGRAMMING LIST
  add()
  {
    this.http.postdata("http://localhost:8085/register/settings",this.adminsettings).subscribe((item: any)=>
    {
      if(item.code=="SUCCESS")
      {
        this.getdatascategoryProgram()
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
          title: "Error",
        })  
      }
      else{
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "warning",
          title: "Insertion Successfully",
        })
      }
      this.adminsettings.languages=null;
      this.adminsettings.timer=null;
    },
    error=>
    {
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        icon: "error",
        title: "Error",
      })    
    })
  }
// DELETE CATEGORY PROGRAMMING LIST
  delete()
  {
    this.http.postdata("http://localhost:8085/register/delete/settings",this.adminsettings).subscribe((item: any)=>
    {
      if(item.code=="SUCCESS")
      {
        this.getdatascategoryProgram()
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "success",
          title: "Success",
        }) 

      }
      else{
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          icon: "warning",
          title: "Warning",
        })
      }
      this.adminsettings.categories=null;
      this.adminsettings.languages=null;
      this.adminsettings.timer=null;
    },
    error=>
    {
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        icon: "error",
        title: "Error",
      })    
    })

  }

deleteprogramminglanguage() {
    // Step 1: Get the last value from programmingLanguagelist.Programminglanguege
    const lastLanguage = this.programmingLanguagelist.Programminglanguege[this.programmingLanguagelist.Programminglanguege.length - 1];
    console.log(lastLanguage)

    // Step 2: Assign the last value to adminsettings.languages
    this.adminsettings.languages = lastLanguage ? lastLanguage.language : null;
    console.log(this.adminsettings.languages)


    // Step 3: Send the updated adminsettings object to the backend
    this.http.postdata("http://localhost:8085/register/delete/settings", this.adminsettings).subscribe(
        (item: any) => {
            if (item.code == "SUCCESS") {
                // Refresh the list after deletion
                this.getdatascategoryProgram();

                // Show success message
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    icon: "success",
                    title: "Success",
                });
            } else {
                // Show warning message
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1000,
                    icon: "warning",
                    title: "Warning",
                });
            }

            // Reset adminsettings properties
            this.adminsettings.categories = null;
            this.adminsettings.languages = null;
            this.adminsettings.timer = null;
        },
        (error) => {
            // Show error message
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
deletecategory() {
  // Step 1: Get the last value from programmingLanguagelist.Programminglanguege
  const lastCategory = this.programmingLanguagelist.Category[this.programmingLanguagelist.Category.length - 1];
  console.log(lastCategory)


  // Step 2: Assign the last value to adminsettings.languages
  this.adminsettings.categories = lastCategory ? lastCategory.category : null;
  console.log(this.adminsettings.categories)


  // Step 3: Send the updated adminsettings object to the backend
  this.http.postdata("http://localhost:8085/register/delete/settings", this.adminsettings).subscribe(
      (item: any) => {
          if (item.code == "SUCCESS") {
              // Refresh the list after deletion
              this.getdatascategoryProgram();

              // Show success message
              Swal.fire({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 1000,
                  icon: "success",
                  title: "Success",
              });
          } else {
              // Show warning message
              Swal.fire({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 1000,
                  icon: "warning",
                  title: "Warning",
              });
          }

          // Reset adminsettings properties
          // this.adminsettings.categories = null;
          this.adminsettings.languages = null;
          this.adminsettings.timer = null;
      },
      (error) => {
          // Show error message
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
getdatascategoryProgram(){
    this.http.getdata("http://localhost:8085/register/getsettings").subscribe((item: any)=>
    {
      this.programmingLanguagelist=item
      this.adminsettings.timer=item.Timer
      this.adminsettings.mcqeasy=item.mcqeasy
      this.adminsettings.mcqmedium=item.mcqmedium
      this.adminsettings.mcqhard=item.mcqhard
      this.adminsettings.prgeasy=item.prgeasy
      this.adminsettings.prgmedium=item.prgmedium
      this.adminsettings.prghard=item.prghard
      this.adminsettings.noMcq=item.noMcq
      this.adminsettings.noPrg=item.prgmedium+item.prgeasy+item.prghard;
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        icon: "success",
        title: "Success",
      }) 
    },
    error=>
    {
      Swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        icon: "error",
        title: "Error",
      })     
    })

}

}
