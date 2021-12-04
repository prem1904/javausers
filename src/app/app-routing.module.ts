import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryChallanComponent } from './delivery-challan/delivery-challan.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"details/:uid",component:DetailPageComponent},
  {path:"access/:uid/:vid",component:SupportComponent},
  { path: "delivery/:uid", component: DeliveryChallanComponent},
  { path: '**', component: DeliveryChallanComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
