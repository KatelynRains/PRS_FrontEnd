import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  request: Request = new Request();
  users: User[] = [];
  id: number = 0;

  constructor(
    private reqsvc: RequestService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    saveEdit(): void {
      this.request.userId =+ this.request.userId;
      this.reqsvc.change(this.request).subscribe(
        res => {console.debug("edit successful");
                this.router.navigateByUrl("/home");},
        err => {console.error(err);}        
      ); }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.usersvc.list().subscribe(
      res => {this.users = res},
      err => {console.error(err)}
    )
    this.reqsvc.get(this.id).subscribe(
      res => {console.debug("Request:", res);
      this.request = res;},
      err => { console.error(err);}
    );
  }
}
