import { Component } from '@angular/core';
import { JobListingComponent } from './job-listing/job-listing.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    JobListingComponent,
    SearchComponent
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

}
