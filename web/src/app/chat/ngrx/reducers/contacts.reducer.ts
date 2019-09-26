import { ContactsActionTypes, ContactsActionsUnion} from '../actions/contacts.actions';

export interface State {
  loading: boolean;
}

const initialState: State = {
  loading: false,
};

export function reducer(
  state = initialState,
  action: ContactsActionsUnion
): State {
  switch (action.type) {
  
    default: {
      return state;
    }
  }
}


export const getLoading = (state: State) => state.loading;
