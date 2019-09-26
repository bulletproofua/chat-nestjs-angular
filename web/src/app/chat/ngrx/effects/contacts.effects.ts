import { Injectable } from "@angular/core";
// rxjs
import { of, Observable } from "rxjs";
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
// ngrx
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";

// import { Load, LoadSuccess, LoadFail, CollectionActionTypes } from "../actions/contacts.actions";


@Injectable()
export class ContactsEffects {
  constructor(
    private store: Store<any>,
    private actions$: Actions,
  ) {}

}
