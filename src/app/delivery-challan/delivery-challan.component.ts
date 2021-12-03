import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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
  qty:number=0.0;
  dat:number=0;
  rate=0.0;
  cost=0.0;
  constructor() { }

  ngOnInit(): void {
    
  }


  getTotalCost(){
     return this.items.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  getQuantity(){
     return this.items.map(t => t.qty).reduce((acc, value) => acc + value, 0);
  }
  onFocusEvent(event: any){
    console.log(event.target.value);

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
