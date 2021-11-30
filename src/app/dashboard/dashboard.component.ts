import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { asset } from '../asset/asset';
import { DataService } from '../data/data.service';
import { UserModule } from '../user/user/user.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   user:UserModule=<UserModule>{};
   userid="61a38f0105420c2c297928ad";
   asset:asset[]=[];
   displayedColumns: string[] = ['assetname', 'price', 'purchasedate','category','quickreponse' ];

   isLoadingResults = true;


  constructor(private http:HttpClient, private dataservice: DataService) {
    
   }

  ngOnInit(): void {  
    this.isLoadingResults=true;
  
    this.http.get<asset[]>("/asset/list?id="+this.userid).subscribe((data:asset[])=>{
      this.asset=data;
      this.isLoadingResults = false;
    });
    
   
  }
     
     
  }

