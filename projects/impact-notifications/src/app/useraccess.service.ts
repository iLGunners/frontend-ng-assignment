import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccessService {
  isUserLoggedIn: boolean;
  
  constructor() {
    this.isUserLoggedIn = false;
  }
}
