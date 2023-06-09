import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalViewComponent } from './pages/global-view/global-view.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalViewComponent,
    AnalyticsComponent,
    NavbarComponent,
    HeaderComponent,
    ChartComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
