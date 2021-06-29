import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private syssvc: SystemService,
    private router: Router,
    private usersvc: UserService

  ) { }

 login():void{ 
    this.usersvc.login(this.username, this.password).subscribe(
        res => {console.log("Login Successful");
        let user = new User();
        this.syssvc.loggedInUser = user;
        this.router.navigateByUrl("user/list");})
      
      this.message = "Login failed!"
  }
  ngOnInit(): void {}
}
