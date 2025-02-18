import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentPortalDTO } from 'src/app/models/student-portal-dto';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-studentportal',
  templateUrl: './studentportal.component.html',
  styleUrls: ['./studentportal.component.css']
})
export class StudentportalComponent implements OnInit {
  validationMessage: any;
  constructor(private httpservice: HttpService,private router: Router) { }

clearForm() 
{
  this.studentportaldto = new StudentPortalDTO();
}
login() 
{

throw new Error('Method not implemented.');

}

  signup()
  {
      
    // this.fillDummyData()
    this.validationMessage = {};
    this.httpservice.postdata("http://localhost:8085/register/student-portal",this.studentportaldto).subscribe((item: any)=>
    {
      this.clearForm()
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
        this.router.navigate(['./supadmin/landing'],{skipLocationChange:true});
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
              
        });
        }        
      }
    },
    error=>
    {
      this.clearForm()
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

  studentportaldto: StudentPortalDTO = new StudentPortalDTO()


  ngOnInit(): void 
  {
    this.validationMessage = {};
  }

  fillDummyData() {
    const dummyData: Partial<StudentPortalDTO> = {
        phoneNumber: '9999999999',
        gender: 'Male',
        collegename: 'ABC University',
        pincode: '123456',
        currentSemester: '6',
        currentCgpa: 8.5,
        ktuId: 'KTU123456',


        highSchoolCourse: 'Science',
        highSchoolCollege: 'XYZ High School',
        highSchoolGraduationYear: 2018,

        higherSecondaryCourse: 'Computer Science',
        higherSecondaryCollege: 'XYZ Junior College',
        higherSecondaryGraduationYear: 2020,

        graduationDegree: 'B.Tech Computer Science',
        graduationCollege: 'ABC University',
        graduationGraduationYear: '2024',

        miniProjectName: 'Chatbot',
        miniProjectStack: 'Python, Flask',
        miniProjectYear: '2022',

        mainProjectName: 'AI Assistant',
        mainProjectStack: 'React, Node.js',
        mainProjectYear: '2023',

        personalProjectName: 'Portfolio Website',
        personalProjectStack: 'Angular, Firebase',
        personalProjectYear: '2023',

        frameworksKnown1: 'Angular',
        frameworksKnown2: 'Spring Boot',
        frameworksKnown3: 'Django',

        programmingLanguages1: 'Java',
        programmingLanguages2: 'Python',
        programmingLanguages3: 'C++',

        languagesKnown1: 'English',
        languagesKnown2: 'Hindi',
        languagesKnown3: 'French',

        hobbies1: 'Reading',
        hobbies2: 'Coding',
        hobbies3: 'Gaming',

        achievements1: 'Hackathon Winner',
        achievements2: 'Top in Class',
        achievements3: 'Published Paper',

        softSkills1: 'Communication',
        softSkills2: 'Leadership',
        softSkills3: 'Problem-solving'
    };

    // Ensure keys are correctly inferred as keyof StudentPortalDTO
    (Object.keys(this.studentportaldto) as Array<keyof StudentPortalDTO>).forEach((key) => {
        if (dummyData[key] !== undefined) {
            // Explicitly handle type assignment
            this.studentportaldto[key] = dummyData[key] as never;
        }
    });

}

}
