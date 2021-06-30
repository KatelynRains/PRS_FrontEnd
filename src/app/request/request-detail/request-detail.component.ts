import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { Request } from 'src/app/request/request.class'
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request: Request = new Request();
  user: User = new User();
  id: number =0;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  deleteReq(): void {
    this.id = this.route.snapshot.params.id;
    this.reqsvc.remove(this.request).subscribe(
      res => {console.debug("delete successful");
              this.router.navigateByUrl("/home");},
      err => {console.error(err);}
    ); }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.reqsvc.get(this.id).subscribe(
      res => {
        console.debug("Request:",res);
        this.request = res;
      },
      err => {console.error(err);}
    )
  }


}
