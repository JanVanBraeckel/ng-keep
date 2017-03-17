import 'rxjs/add/observable/from';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _angularFire: AngularFire, private _router: Router) { }

  canActivate(): Observable<boolean> {
    return this._angularFire.auth.map(user => {
      if (user) {
        return true;
      } else {
        this._router.navigate(['auth']);
        return false;
      }
    }).take(1);
  }
}
