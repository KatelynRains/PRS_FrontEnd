import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user: User = new User();
  users: User[] =[]

  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  saveCreate(): void {
    this.usersvc.create(this.user).subscribe(
    res => {console.debug("create successful");
            this.router.navigateByUrl("/home");},
    err => {console.error(err);}
  );}

    
  ngOnInit(): void {
    }
  }


