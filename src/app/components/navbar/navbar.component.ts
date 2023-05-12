import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public menu_open: boolean = true;
  public tab = 0;

  constructor(private router: Router) {}

  openCloseNavbar() {
    if (this.menu_open) {
      this.menu_open = false;
    } else {
      this.menu_open = true;
    }
    console.log(this.menu_open);
  }
  route(path: string) {
    switch (path) {
      case 'analytics':
        this.router.navigateByUrl('/analytics');
        break;

      default:
        this.router.navigateByUrl('/');
        break;
    }
  }
}
