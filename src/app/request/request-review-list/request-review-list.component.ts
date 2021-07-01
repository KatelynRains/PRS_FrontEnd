import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';

import { RequestService } from '../request.service';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request [] =[];
  users: User [] = [];
  userId:number= 0
  
  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.checkLogin();
    this.userId = this.syssvc.loggedInUser == null ? 0 : this.syssvc.loggedInUser.id;
    this.reqsvc.requests(this.userId).subscribe(
      res =>{console.debug("Review Requests:", res);
      this.requests = res;
      },
      err => {console.error(err);}
    )
  }

}
