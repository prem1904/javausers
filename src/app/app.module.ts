import { NgModule ,Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Role } from './user/user/role';
import { UserModule } from './user/user/user.module';
import { asset } from './asset/asset';
import { DataService } from './data/data.service';
import { DetailPageComponent } from './detail-page/detail-page.component'; 
import { QRCodeModule } from 'angular2-qrcode';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule }from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SupportComponent } from './support/support.component';
import { FormBuilder, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DeliveryChallanComponent } from './delivery-challan/delivery-challan.component';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from'@angular/material/input';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailPageComponent,
    SupportComponent,
    DeliveryChallanComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent 
    
  ],
  imports: [
    BrowserModule,MatFormFieldModule,MatInputModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,
    MatTableModule,MatIconModule,MatButtonModule,MatProgressSpinnerModule,FormsModule
    
    
  ],
  providers: [DataService,FormBuilder,DatePipe,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
