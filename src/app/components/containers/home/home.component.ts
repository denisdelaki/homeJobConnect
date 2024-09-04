import { Component } from '@angular/core';
import { MenuListComponent } from '../../presenters/menu-list/menu-list.component';
import { SearchComponent } from '../../presenters/search/search.component';
import { JobListingComponent } from '../../presenters/jobs/job-listing/job-listing.component';
import { FooterComponent } from '../../presenters/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent, 
    JobListingComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
