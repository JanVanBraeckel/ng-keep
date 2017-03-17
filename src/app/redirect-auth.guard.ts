import 'rxjs/add/observable/from';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class RedirectAuthGuard implements CanActivate {
  constructor(private _angularFire: AngularFire, private _router: Router) { }

  canActivate(): Observable<boolean> {
    return this._angularFire.auth.map(user => {
      if (user) {
        this._router.navigate(['']);
        return false;
      } else {
        return true;
      }
    }).take(1);
    // let authenticated = false;
    // return Observable.from(this._auth)
    //   .take(1)
    //   .map((authState: FirebaseAuthState) => !!authState)
    //   .do(authenticated => {
    //     if (authenticated) {
    //       this._router.navigate(['']);
    //     }
    //   });
  }
}
