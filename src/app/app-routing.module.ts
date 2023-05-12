import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { GlobalViewComponent } from './pages/global-view/global-view.component';

const routes: Routes = [
  { path: '', component: GlobalViewComponent },
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
