import { Injectable } from '@angular/core';

import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  CanLoad, Route
} from '@angular/router';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../ngrx/user-module/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  
  isUserLoggedIn$ = this.store.pipe(select(fromUser.isUserLoggedIn));

  constructor(private store: Store<any>) { }

  canActivate(Route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.canActivate(route, state);
  }

  canLoad(): Observable<boolean>|Promise<boolean>|boolean {
    return this.checkLogin();
  }

  public checkLogin(): Observable<boolean> | boolean {
    return this.isUserLoggedIn$
  }

}
