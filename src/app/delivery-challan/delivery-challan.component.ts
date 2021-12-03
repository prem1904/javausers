import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface Item{
  desc:string;
  qty:number;
  rate:number;
  cost:number;
}

@Component({
  selector: 'app-delivery-challan',
  templateUrl: './delivery-challan.component.html',
  styleUrls: ['./delivery-challan.component.scss']
})
export class DeliveryChallanComponent implements OnInit {
  items:Item[]=[];
  desc:string="";
  today=this.datepipe.transform(new Date, 'yyyy-MM-dd');
  qty:number=0.0;
  rate=0.0;
  subcost:number=0.0;
  totalcost=0.0;
  tax=0.0;
  gst=28.0;

  constructor( public datepipe: DatePipe) { }

  ngOnInit(): void {
    if(this.items.length==0){
    this.items.push({desc:"",qty:0.0 ,rate:0.0,cost:0.0});
    }
  }


  getCost(){
     this.subcost=this.items.map(t => t.cost).reduce((acc, value) => acc + value, 0);
     this.calculateCost(this.gst);
     return this.subcost;
  }

  calculateCost(gst:number){
     this.tax=(gst* this.subcost)/100;
     this.totalcost =this.tax+this.subcost;  

  }

  getQuantity(){
     return this.items.map(t => t.qty).reduce((acc, value) => acc + value, 0);
  }
  

  saveItem(row:number){
    const cost=this.items[row].qty * this.items[row].rate; 
    this.items[row].cost=cost;  
  
  }
  addItem(){
    this.items.push({desc:"",qty:0.0 ,rate:0.0,cost:0.0});
  }

  deleteItem(row:number){
    this.items.splice(row,1)
  }

}
