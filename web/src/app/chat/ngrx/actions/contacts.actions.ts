import { Action } from "@ngrx/store";

export enum ContactsActionTypes {
  LoadContacts        = "[Chat Contacts] Load Contacts",
  LoadContactsSuccess = "[Chat Contacts] Load Contacts Success",
  LoadContactsFail    = "[Chat Contacts] Load Contacts Fail",

  SelectContact = "[Chat Contacts] Select Contact",
  SetSearchValue = "[Chat Contacts] Select Search",
}


export class LoadContacts implements Action {
  readonly type = ContactsActionTypes.LoadContacts;
  constructor() {}
}

export class LoadContactsSuccess implements Action {
  readonly type = ContactsActionTypes.LoadContactsSuccess;

  constructor(public payload: any[]) {}
}

export class LoadContactsFail implements Action {
  readonly type = ContactsActionTypes.LoadContactsFail;

  constructor(public payload: any) {}
}

export class SelectContact implements Action {
  readonly type = ContactsActionTypes.SelectContact;

  constructor(public userId: string) {}
}

export class SetSearchValue implements Action {
  readonly type = ContactsActionTypes.SetSearchValue;
  constructor(public payload: string) {}
}





export type ContactsActionsUnion = 
  | LoadContacts
  | LoadContactsSuccess
  | LoadContactsFail
  | SelectContact
  | SetSearchValue
