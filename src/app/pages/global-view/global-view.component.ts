import { Component, Output } from '@angular/core';
import { HeaderTitle } from 'src/app/models/header-title';

@Component({
  selector: 'app-global-view',
  templateUrl: './global-view.component.html',
  styleUrls: ['./global-view.component.css'],
})
export class GlobalViewComponent {
  public headerTitle: string;
}
