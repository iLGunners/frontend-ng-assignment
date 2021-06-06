import { Component } from '@angular/core';

import { UseraccessService } from './useraccess.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Impact Notifications';

  userAccessService = new UseraccessService;
}
