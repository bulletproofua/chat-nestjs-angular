import { ContactsActionTypes, ContactsActionsUnion} from '../actions/contacts.actions';

export interface State {
  loading: boolean;
  selectedId: string;
  searchValue: string;
  contacts: Array<any>;
}

const initialState: State = {
  loading: false,
  selectedId: undefined,
  searchValue: undefined,
  contacts: [] 
};

export function reducer(
  state = initialState,
  action: ContactsActionsUnion
): State {
  switch (action.type) {

    case ContactsActionTypes.LoadContacts: {
      return state;
    }

    case ContactsActionTypes.LoadContactsSuccess: {
      return {
        ...state,
        selectedId: action.payload && action.payload.length ? action.payload[0].userId : undefined,
        contacts: action.payload
      };
    }

    case ContactsActionTypes.LoadContactsFail: {
      return state;
    }

    case ContactsActionTypes.SelectContact: {
      return {
        ...state,
        selectedId: action.userId
      }
    }


    case ContactsActionTypes.SetSearchValue: {
      return {
        ...state,
        searchValue: action.payload
      }
    }   
  
    default: {
      return state;
    }
  }
}


export const getLoading = (state: State) => state.loading;
export const getSelected = (state: State) => state.selectedId;
export const getSearchValue = (state: State) => state.searchValue;
export const getContacts = (state: State) => state.contacts;


