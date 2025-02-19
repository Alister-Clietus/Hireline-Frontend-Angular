import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ResumeResponseDTO } from 'src/app/models/resume-response-dto';
import { HttpService } from 'src/app/service/http.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-resume-checker',
  templateUrl: './resume-checker.component.html',
  styleUrls: ['./resume-checker.component.css']
})
export class ResumeCheckerComponent implements OnInit 
{

  clear() {
    // this.file = null;
    // this.resumeUrl = null; // Reset the resume URL
    // const fileInput = document.getElementById('resumeUpload') as HTMLInputElement;
    // if (fileInput) {
    //   fileInput.value = ''; // Clear the file input
    // }
    console.log("Resume cleared");
  }
  resumeresponsedto: ResumeResponseDTO = new ResumeResponseDTO()

  ngOnInit(): void 
  {

  }

  score: number;
  insights: string[] = [
    'Your resume has a strong professional summary.',
    'Your work experience is well structured.',
    'Skills section includes key industry terms.',
  ];

  resumeUrl: SafeResourceUrl | null = null;
  file: any;
  constructor(private sanitizer: DomSanitizer,private httpservice: HttpService) {}

  onFileSelected(event: Event) 
  {
    console.log("On Function Selected")
    const file = (event.target as HTMLInputElement).files?.[0];
    this.file=file
    if (file) 
      {
      const reader = new FileReader();
      console.log("On File is here")

      reader.onload = () => {
        this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string);
        console.log(this.resumeUrl)
      };
      this.sendPdf(this.file)

      if (file.type === 'application/pdf') {
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 800,
          icon: "success",
          title: "File Shown Successfully",
        })        
        reader.readAsDataURL(file);
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 800,
          icon: "error",
          title: "Cannot Preview Pdf",
        })      
      }
    }
  }

  sendPdf(file: File) {
    console.log("file is being uploaded function")
    const formData = new FormData();
    formData.append('file', file);

    this.httpservice.postdata<ResumeResponseDTO>('http://127.0.0.1:5002/upload', formData).subscribe(
      (response:any) => 
        {
        this.score=response.resume_score*10
        this.resumeresponsedto.section_scores=response.section_scores
        console.log(this.resumeresponsedto.section_scores)
        this.resumeresponsedto.suggestions=response.suggestions
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 800,
          icon: "success",
          title: "Pdf Uploaded Successfully",
        })        
        console.log('File uploaded successfully:', response);
      },
      (error) => 
        {
        Swal.fire({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 800,
          icon: "error",
          title: "Pdf Upload Failed",
        })      
      }
    );
  }

}
