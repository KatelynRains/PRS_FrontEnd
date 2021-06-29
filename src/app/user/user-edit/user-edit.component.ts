import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();
  id: number = 0;

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  saveEdit(): void {
    this.usersvc.change(this.user).subscribe(
      res => {console.debug("edit successful");
              this.router.navigateByUrl("/home");},
      err => {console.error(err);}
    );}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.usersvc.get(this.id).subscribe(
      res => {console.debug("User:", res);
        this.user = res;
      },
      err => { console.error(err); }
    );
  }
  }


