import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromContacts from './contacts.reducer';


export interface ChatState {
  contacts: fromContacts.State;
}

export const reducers: ActionReducerMap<ChatState> = {
  contacts: fromContacts.reducer
};

export const getChatState = createFeatureSelector<ChatState>('chat');

export const getContactsState = createSelector(
  getChatState,
  (state: ChatState) => {
   return state.contacts;
  }
);

export const getContactsLoading = createSelector(
  getContactsState,
  fromContacts.getLoading
);

