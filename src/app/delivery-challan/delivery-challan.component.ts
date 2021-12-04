import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Customer, Item, ItemCost } from '../user/user/delivery';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-delivery-challan',
  templateUrl: './delivery-challan.component.html',
  styleUrls: ['./delivery-challan.component.scss']
})
export class DeliveryChallanComponent implements OnInit {
  items:Item[]=[];
  itemcost:ItemCost=<ItemCost>{};
  customer:Customer=<Customer>{};
  desc:string="";
  today=this.datepipe.transform(new Date, 'yyyy-MM-dd');
 
  

  constructor( public datepipe: DatePipe, private formBuilder:FormBuilder,private http:HttpClient,private snapshot:ActivatedRoute) { 
    this.itemcost.gst=28.0;
    this.customer.no="INV"+new Date().getMilliseconds();

  }

  ngOnInit(): void {

    this.snapshot.params.subscribe((data:any)=>{
      this.http.get("/deliveries/"+data.uid).subscribe((data:any)=>{
           this.items=data.item;
           this.itemcost=data.itemCost;
           this.customer=data.customer;
      })
    });
  }

  printCall(){
    window.print();
  }


  getCost(){
     this.itemcost.subtotal=this.items.map(t => t.cost).reduce((acc, value) => acc + value, 0);
     this.calculateCost(this.itemcost.gst);
     return  this.itemcost.subtotal;
  }

  calculateCost(gst:number){
     this.itemcost.tax=(gst* this.itemcost.subtotal)/100;
     this.itemcost.total =this.itemcost.tax+this.itemcost.subtotal;  

  }

  getQuantity(){

    this.itemcost.qty=this.items.map(t => t.qty).reduce((acc, value) => acc + value, 0);
    return this.itemcost.qty;
  }
  

  saveItem(row:number){
    const cost=this.items[row].qty * this.items[row].rate; 
    this.items[row].cost=cost;  
  
  }
  addItem(){
    this.items.push({desc:"",qty:0.0 ,rate:0.0,cost:0.0});
    console.log(this.items);
  }

  deleteItem(row:number){
    this.items.splice(row,1)
  }
  
  onSubmit(){
    let data : any= Object.assign((  this.formBuilder.group({
      "deliveryid":this.customer.no,
      "issuedate": this.today,
      "customer": this.customer,
      "item":[this.items],
      "itemCost":this.itemcost

    }).value));
     this.http.post("/deliveries",data).toPromise().then((data:any)=>{
       console.log(data);
     })
  }

}
