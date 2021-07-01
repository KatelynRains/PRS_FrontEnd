import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/request/request.class'
import { Requestline } from 'src/app/requestline/requestline.class';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {
  request: Request = new Request();
  user: User = new User();
  id: number =0;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.reqsvc.get(this.id).subscribe(
      res => {
        console.debug("Request:",res);
        this.request = res;
      },
      err => {console.error(err);}
    );  
  }

  approve():void{
    this.reqsvc.approve(this.request).subscribe(
      res => {console.debug("Approve:",res);
              this.router.navigateByUrl("/request/list");},
      err => {console.error(err);}
      ); 
  }
  reject(): void { 
    this.reqsvc.reject(this.request).subscribe(
    res => {console.debug("Reject:",res);
            this.router.navigateByUrl("/request/list");},
    err => {console.error(err);}
    ); }
}
