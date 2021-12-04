import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { asset } from '../asset/asset';
import { DataService } from '../data/data.service';
import { Customer, Delivery, Item, ItemCost } from '../user/user/delivery';
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
   delivery:Delivery=<Delivery>{};
   itemcost:ItemCost=<ItemCost>{};
   search:string="";
   
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
  searchInvoice(){
  this.isLoadingResults=true;
  this.http.get<Delivery>("/deliveries/search/findByDeliveryid?deliveryid="+this.search).subscribe((data:Delivery)=>{
    this.delivery=data;
    this.delivery.issuedate=data.issuedate;
    this.delivery.deliveryid=this.search;
    this.itemcost=this.delivery.itemCost
    this.isLoadingResults = false;
  });
 }

     
     
  }

