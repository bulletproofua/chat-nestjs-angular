import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';
import { User } from '../models/user';

export interface State {
  user: fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer
};

export const getUserState = createFeatureSelector<State>('user');

export const getUserDataState = createSelector(
  getUserState,
  (state: State) => state.user
);

export const isUserLoggedIn = createSelector(
  getUserDataState,
  (state: User): boolean => {
    return !!(state.access_token && state.email);
  }
);

export const getUserId = createSelector(
  getUserDataState,
  fromUser.getUserId
);

export const getUserName = createSelector(
  getUserDataState,
  fromUser.getUserName
);

export const getUserEmail = createSelector(
  getUserDataState,
  fromUser.getUserEmail
);

export const getUserAccessToken = createSelector(
  getUserDataState,
  fromUser.getUserAccessToken
);
