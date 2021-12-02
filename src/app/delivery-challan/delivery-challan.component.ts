import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
export interface Item{
  desc:string;
  qty:string;
  rate:string;
}

@Component({
  selector: 'app-delivery-challan',
  templateUrl: './delivery-challan.component.html',
  styleUrls: ['./delivery-challan.component.scss']
})
export class DeliveryChallanComponent implements OnInit {
  items:Item[]=[];
 
  @HostListener('window:resize', ['$event'])
sizeChange(event:any) {
  console.log('size changed.', event);
}
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.items.push({desc:"", qty:"",rate:""});   
      window.dispatchEvent(new Event('resize'));
  }

  deleteItem(row:number){
    this.items.splice(row,1)
  }

}
