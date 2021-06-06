import { Component, OnInit } from '@angular/core';

import { UseraccessService } from '../useraccess.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userAccessService = new UseraccessService;

  constructor() {}

  ngOnInit(): void {}

}
