import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [
   MatCardModule,
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss'
})
export class JobListingComponent {
  jobs: any[] = [
    {
      id: 1,
      title: 'Software Engineer',
      employerName: 'Tech Solutions Inc.',
      status: 'Full-time',
      location: 'San Francisco, CA',
      datePosted: new Date('2023-05-01'),
      category: 'Engineering'
    },
    {
      id: 2,
      title: 'Marketing Manager',
      employerName: 'Global Marketing Co.',
      status: 'Full-time',
      location: 'New York, NY',
      datePosted: new Date('2023-05-02'),
      category: 'Marketing'
    },
    {
      id: 3,
      title: 'Data Analyst',
      employerName: 'Data Insights LLC',
      status: 'Part-time',
      location: 'Chicago, IL',
      datePosted: new Date('2023-05-03'),
      category: 'Analytics'
    },
    {
      id: 4,
      title: 'UX Designer',
      employerName: 'Creative Designs',
      status: 'Contract',
      location: 'Los Angeles, CA',
      datePosted: new Date('2023-05-04'),
      category: 'Design'
    },
    {
      id: 5,
      title: 'Sales Representative',
      employerName: 'Sales Pro Inc.',
      status: 'Full-time',
      location: 'Miami, FL',
      datePosted: new Date('2023-05-05'),
      category: 'Sales'
    },
    {
      id: 6,
      title: 'Product Manager',
      employerName: 'Innovative Products Co.',
      status: 'Full-time',
      location: 'Seattle, WA',
      datePosted: new Date('2023-05-06'),
      category: 'Product Management'
    },
    {
      id: 7,
      title: 'Customer Support Specialist',
      employerName: 'Support Solutions',
      status: 'Part-time',
      location: 'Austin, TX',
      datePosted: new Date('2023-05-07'),
      category: 'Customer Service'
    },
    {
      id: 8,
      title: 'Financial Analyst',
      employerName: 'Finance Experts Ltd.',
      status: 'Full-time',
      location: 'Boston, MA',
      datePosted: new Date('2023-05-08'),
      category: 'Finance'
    },
    {
      id: 9,
      title: 'Human Resources Manager',
      employerName: 'People First Corp.',
      status: 'Full-time',
      location: 'Denver, CO',
      datePosted: new Date('2023-05-09'),
      category: 'Human Resources'
    },
    {
      id: 10,
      title: 'Content Writer',
      employerName: 'Content Creators Network',
      status: 'Freelance',
      location: 'Remote',
      datePosted: new Date('2023-05-10'),
      category: 'Writing'
    }
  ];

  shareJob(jobId: number) {
    // Implement share functionality
    console.log('Sharing job:', jobId);
  }

  saveJob(jobId: number) {
    // Implement save functionality
    console.log('Saving job:', jobId);
  }

  viewJobDetails(jobId: number) {
    // Implement view details functionality
    console.log('Viewing job details:', jobId);
  }
}