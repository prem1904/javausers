import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';
import { support } from '../asset/support';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  support:support=<support>{}
  supportdesc:string='';
  supportcost:number=0;

 assetid:string='';
 
  customerid: string='';
 
  providerid:string='';
 
 nextinspection:Date=new Date;
 

  constructor(private formbuilder:FormBuilder ,private http:HttpClient, private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
   
    let data : any= Object.assign( this.formbuilder.group({
      "supportdesc":this.supportdesc,
      "supportcost":this.supportcost,
      "assetid": this.assetid,
      "customerid":this.customerid,
      "providerid":this.providerid
    }).value);
    console.log(data);

    this.http.post("/support/"+this.customerid+"/"
    +this.assetid+"/?id="+this.providerid+"&supportdate=2021-12-01",data)
    .toPromise().then((data:any)=>{
      let path ='/dashboard';
      this.router.navigate([path]);
    });
  }

}
