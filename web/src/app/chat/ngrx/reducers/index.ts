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

export const getContacts = createSelector(
  getContactsState,
  fromContacts.getContacts
);

export const getSelected = createSelector(
  getContactsState,
  fromContacts.getSelected
);

export const getSearchValue = createSelector(
  getContactsState,
  fromContacts.getSearchValue
);

export const getFilteredContactsBySearch = createSelector(
  getContacts,
  getSearchValue,
  (contacts: Array<any>, searchValue: string) => {
    if ( searchValue) {
      const sv = ((searchValue).trim()).toLowerCase();
      return contacts.filter(e => ((e.username).trim()).toLowerCase().indexOf(sv) !== -1)
    } else {
      return contacts;
    }
  }
);

export const getSelectedContact = createSelector(
  getContacts,
  getSelected,
  (contacts: Array<any>, selectedId: string) => {
    return contacts.find(e => e.userId === selectedId)
  }
);

