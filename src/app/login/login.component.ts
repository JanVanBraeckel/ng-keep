import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: FirebaseAuthState;

  constructor(private _angularFire: AngularFire, private _router: Router) {
    _angularFire.auth.subscribe(user => this.user = user);
  }

  ngOnInit() {
    if (this.user) {
      this._router.navigate(['']);
    }
  }

  login() {
    this._angularFire.auth.login();
  }
}
