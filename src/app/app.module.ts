import { NgModule } from '@angular/core';
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
import { FormBuilder, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailPageComponent,
    SupportComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QRCodeModule,
    BrowserAnimationsModule,
    MatTableModule,MatIconModule,MatButtonModule,MatProgressSpinnerModule,FormsModule
    
    
  ],
  providers: [DataService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
