export interface Item{
    desc:string;
    qty:number;
    rate:number;
    cost:number;
  }
  export interface Customer{
    name:string;
    phonenum:string;
    address:string;
    email:string;
    gstin:string;
    no:string;
  }
  export interface ItemCost{	
    subtotal:number;
    total:number;
    gst:number;
    tax:number;
    qty:number;
  }

  export interface Delivery{
      deliveryid:string,
      issuedate:string,
      customer:Customer;
      itemCost:ItemCost;
      item:Item[];

  }