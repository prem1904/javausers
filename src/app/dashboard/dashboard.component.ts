import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { asset } from '../asset/asset';
import { UserModule } from '../user/user/user.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   user:UserModule=<UserModule>{};
   userid="61a38f0105420c2c297928ad";

   


  constructor(private http:HttpClient) {
    
   }

  ngOnInit(): void {
    this.http.get<UserModule>("/userManagements/61a38f0105420c2c297928ad").subscribe((data:UserModule)=>{
       this.user=data;
    });
   
  }
     
     
  }

