import { Problem } from "./problem";

export interface support{
	supportid:string;
	
    supportcost:number;
	
	 supportdesc:string;
	
	assetid:string;
	
	 customerid: string;
	
	 providerid:string;
	
	nextinspection:Date;
	
	problem:Problem[];

}