import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { asset } from '../asset/asset';
import { Problem } from '../asset/problem';
import { support } from '../asset/support';
import { DataService } from '../data/data.service';
import { UserModule } from '../user/user/user.module';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  user:UserModule=<UserModule>{};
  support:support[]=[];


  userid="61a38f0105420c2c297928ad";
  asset:asset=<asset>{};
   assetid: string = " ";
  level= "L" ;
  width=200;
  
  isLoadingResults = true;


 constructor(private http:HttpClient, private dataservice: DataService,private route:ActivatedRoute) {
   
   
  }

 ngOnInit(): void {  
  
  this.route.params.subscribe((data:any)=>{
    this.isLoadingResults=true;
   
    this.http.get<asset>("/asset?id="+ data.uid ).toPromise().then((data:asset)=>{
      this.assetid="https://desolate-retreat-47606.herokuapp.com/support/"+data.customerid+"/"+data.assetid+"?id=61a3a3af7a4858447c96e7c7 & supportdate=2021-12-01";
      this.http.get<support[]>("/support/customer?customerid="+data.customerid).toPromise().then((data:support[])=>{
        this.support=data;
        this.isLoadingResults=false;
      })
    });
 })
   

  

   
  
 }

}
