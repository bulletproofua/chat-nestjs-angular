import { Action } from "@ngrx/store";
import { User } from '../models/user';

export enum UserActionTypes {
  GetUserData = '[User] GetUserData',
  GetUserDataSuccess = '[User] GetUserDataSuccess',
  GetUserDataFail = '[User] GetUserDataFail',

  SetUserData = '[User] SetUserData',

  LogoutUser = '[User] LogoutUser',
}

export class GetUserData implements Action {
  readonly type = UserActionTypes.GetUserData;
}

export class GetUserDataSuccess implements Action {
  readonly type = UserActionTypes.GetUserDataSuccess;

  constructor(public payload: any) {}
}

export class GetUserDataFail implements Action {
  readonly type = UserActionTypes.GetUserDataFail;
  constructor(public error?: any) {}
}


export class SetUserData implements Action {
  readonly type = UserActionTypes.SetUserData;

  constructor(public payload: User) {}
}

export class LogoutUser implements Action {
  readonly type = UserActionTypes.LogoutUser;
}


export type UserActionsUnion =
  | GetUserData
  | GetUserDataSuccess
  | GetUserDataFail
  | SetUserData
  | LogoutUser;
