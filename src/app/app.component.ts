import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import { UserModule } from './user/user/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user:UserModule=<UserModule>{};

  constructor(private dataservice: DataService){}

  ngOnInit(): void {
    this.dataservice.getUser("/userManagements/61a38f0105420c2c297928ad").subscribe((data:UserModule)=>{
      this.user=data;
    });
  }
  title = 'review-dashboard';

  
}
