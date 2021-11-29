import { Role } from "./role";

export interface UserModule { 
   username:string;
   email:string;
   role:Role[];
}
