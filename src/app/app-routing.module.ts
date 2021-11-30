import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"details/:uid",component:DetailPageComponent},
  {path:"access",component:SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
