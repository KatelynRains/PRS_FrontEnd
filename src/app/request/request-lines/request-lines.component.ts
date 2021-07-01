import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/request/request.class'
import { Requestline } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { User } from 'src/app/user/user.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request: Request = new Request();
  user: User = new User();
  id: number = 0;
    constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private rqstlnsvc: RequestlineService,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }
  review(): void {
    this.reqsvc.review(this.request).subscribe(
      res => {
        console.debug("Review:", res);
        this.refresh();
        },
      err => { console.error(err); }
    );
  }
  refresh(): void {
    this.id = this.route.snapshot.params.id;
    this.reqsvc.get(this.id).subscribe(
      res => {
        console.debug("Request:", res);
        this.request = res;
      },
      err => { console.error(err); }
    );}

    delete(requestLine: Requestline): void {
    console.log(this.request.requestLines);
    this.rqstlnsvc.remove(requestLine).subscribe(
      res => {console.debug("delete successful"),
          this.refresh();},
      err => {console.error(err);}
    );    

    }

}

