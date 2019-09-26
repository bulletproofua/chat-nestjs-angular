import { Action } from "@ngrx/store";

export enum ContactsActionTypes {
  LoadContacts        = "[Chat Contacts] Load Contacts",
  LoadContactsSuccess = "[Chat Contacts] Load Contacts Success",
  LoadContactsFail    = "[Chat Contacts] Load Contacts Fail",
}


export class LoadContacts implements Action {
  readonly type = ContactsActionTypes.LoadContacts;

  constructor(public payload?: any) {}
}

export class LoadContactsSuccess implements Action {
  readonly type = ContactsActionTypes.LoadContactsSuccess;

  constructor(public payload: any[]) {}
}

export class LoadContactsFail implements Action {
  readonly type = ContactsActionTypes.LoadContactsFail;

  constructor(public payload: any) {}
}

export type ContactsActionsUnion = 
  | LoadContacts
  | LoadContactsSuccess
  | LoadContactsFail
