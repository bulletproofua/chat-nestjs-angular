import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, select } from "@ngrx/store";

import { Observable, defer, of } from "rxjs";
import { map } from "rxjs/operators";

import { UserActionTypes, GetUserData, GetUserDataFail, GetUserDataSuccess } from "../actions/user.actions";

import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  private KEY = 'chat';

  @Effect({dispatch: false})
  setUserData$: Observable<void> = this.actions$.pipe(
    ofType(UserActionTypes.SetUserData),
    map((action: any) => {

      const ap = action.payload;
      const data = {
        id: ap.id,
        access_token: ap.access_token,
        email: ap.email,
        username: ap.username
      }
      const value = JSON.stringify(data);
      let cookie = `${this.KEY}=${encodeURIComponent(value)}`;
      window.document.cookie = cookie;
    })
  );

  @Effect({dispatch: false})
  LogoutUser$: Observable<void> = this.actions$.pipe(
    ofType(
      UserActionTypes.LogoutUser,
      UserActionTypes.GetUserDataFail
    ),
    map((action: any) => {
      window.document.cookie = `${this.KEY}=''`;
      const url = window.location.pathname;
      if (url !== '/login' && url !== '/registration') {
        this.router.navigateByUrl('login');
      }
    })
  );
 
  @Effect()
  getUserData$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.GetUserData),
    map((action: any) => {
      let cookie = window.document
                  .cookie.split('; ')
                  .filter((item: any) => item.split('=')[0] === this.KEY && item !== `${this.KEY}=''`).pop();

                  console.log("TCL: UserEffects -> cookie", cookie)
      if (!cookie) { return new GetUserDataFail(); }

      let v = cookie.split('=').slice(1).join('=');
      v = decodeURIComponent(v);
      const userData: User = parse(v)

      return new GetUserDataSuccess(userData);
    })
  );

  @Effect()
  init$: Observable<Action> = defer(() => {
    return of(new GetUserData())
  });  
}

export function parse(value: any) {
  try {
      return JSON.parse(value);
  } catch (e) {
      return value;
  }
}