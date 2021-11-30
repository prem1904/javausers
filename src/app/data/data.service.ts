import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { asset } from '../asset/asset';
import { UserModule } from '../user/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }

  getUser(userid:string){
    return this.http.get<UserModule>(userid);
  }
  getAsset(assetid:string){
    return this.http.get<asset>(assetid);
  }
}
