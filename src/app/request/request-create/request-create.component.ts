import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Request } from 'src/app/request/request.class'
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  request: Request = new Request();
  users: User[]=[];
  
  constructor(
    private syssvc: SystemService,
    private reqsvc: RequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  saveCreate(): void{
    this.request.userId =+ this.request.userId;
    this.reqsvc.create(this.request).subscribe(
      res => {console.debug("create successful");
      this.router.navigateByUrl("/request/list");},
      err => {console.error(err);}
    );    
  }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.request.userId = this.syssvc.loggedInUser == null ? 0 : this.syssvc.loggedInUser.id;
    this.usersvc.list().subscribe(
      res => { console.debug(res); this.users = res; },
      err => { console.error(err);}
    );
  }

}
