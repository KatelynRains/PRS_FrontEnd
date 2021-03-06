import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
loggedInUser: User | null = null;

  isLoggedIn(): boolean{
    return this.loggedInUser != null;
  }

  checkLogin(): void{
    if(this.loggedInUser == null)
    {this.router.navigateByUrl("/login")}
  }

  constructor(
    private router: Router
  ) { }
}
