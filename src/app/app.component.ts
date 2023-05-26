import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wipass';

  public menu_open: boolean = true; 

  navbarStatus(menu_open){
    this.menu_open = menu_open;
  }
}
