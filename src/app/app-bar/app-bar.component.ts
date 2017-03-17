import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {

  constructor(private _angularFire: AngularFire, private _router: Router) { }

  signout() {
    this._angularFire.auth.logout().then(() => this._router.navigate(['/auth']));
  }
}
