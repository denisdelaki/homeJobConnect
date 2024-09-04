import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
 MatIconModule,
 MatListModule,
  RouterModule,
  MatButtonModule
  ],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  menuOpen = false;
  constructor(private router: Router) {}
  

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
