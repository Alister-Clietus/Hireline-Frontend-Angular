import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  companies = [
    {
      name: 'Google',
      jobTitle: 'Software Engineer',
      averageLPA: 30,
      bond: 'No',
      website: 'https://www.google.com',
      recruitedStudents: 50,
      type: 'MNC',
      startedYear: 1998,
      workCulture: 'Hybrid',
      recruitmentType: 'Aptitude, Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    },
    {
      name: 'StartupX',
      jobTitle: 'Frontend Developer',
      averageLPA: 10,
      bond: 'Yes',
      website: 'https://www.startupx.com',
      recruitedStudents: 10,
      type: 'Startup',
      startedYear: 2015,
      workCulture: 'Remote',
      recruitmentType: 'Technical, HR'
    }
  ];

}
