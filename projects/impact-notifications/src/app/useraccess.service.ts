import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccessService {
  public userLoggedIn: boolean;
  public userWantToRegister: boolean;
  
  constructor() {
    this.userLoggedIn = false;
    this.userWantToRegister = false;
  }

  showRegisterComponentOrNot() {
    this.userWantToRegister = true;
  }

  loginUser() {
    console.log("login clicked");
    this.userLoggedIn = true;
  }

  showRegisterComponent() {
    console.log("register clicked");
    this.userWantToRegister = true;
  }
}
