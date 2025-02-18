import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-resume-checker',
  templateUrl: './resume-checker.component.html',
  styleUrls: ['./resume-checker.component.css']
})
export class ResumeCheckerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // resumeUrl: string | null = null;
  name: string = "John Doe";
  email: string = "john.doe@example.com";
  phone: string = "+1234567890";
  skills: string = "Python, Java, Web Development";
  experience: string = "3 years";
  score: number = 80;
  suggestions: string[] = [
    "Improve formatting for better readability.",
    "Add more keywords related to your job role.",
    "Ensure ATS-friendly structure."
  ];
  insights: string[] = [
    'Your resume has a strong professional summary.',
    'Your work experience is well structured.',
    'Skills section includes key industry terms.',
  ];

  resumeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(reader.result as string);
      };

      if (file.type === 'application/pdf') {
        reader.readAsDataURL(file);
      } else {
        alert('Only PDF files can be previewed.');
      }
    }
  }

}
