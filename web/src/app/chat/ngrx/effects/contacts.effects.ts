import { Injectable } from "@angular/core";
// rxjs
import { of, Observable } from "rxjs";
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
// ngrx
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { ContactsActionTypes, LoadContactsSuccess, LoadContactsFail } from '../actions/contacts.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import * as fromUser from '../../../ngrx/user-module/reducers';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ContactsEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  loadContacts$: Observable<Action> = this.actions$.pipe(
    ofType(ContactsActionTypes.LoadContacts),
    withLatestFrom(
      this.store.select(fromUser.getUserId)
    ),
    switchMap(([action, userId]: any) => {
      return this.http.get(`${environment.apiUrl}/user/contacts/${userId}`, httpOptions).pipe(
        map((res: any) => {
          return new LoadContactsSuccess(res);
        }),
        catchError((error: any) => {
          return of(new LoadContactsFail(error));
        })
      )
    })
  );

}
