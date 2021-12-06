import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryChallanComponent } from './delivery-challan/delivery-challan.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "admin", component: BoardAdminComponent },
  {path:"dashboard",component:DashboardComponent},
  {path:"details/:uid",component:DetailPageComponent},
  {path:"access/:uid/:vid",component:SupportComponent},
  { path: "delivery/:uid", component: DeliveryChallanComponent},
  { path: '**', component: LoginComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
