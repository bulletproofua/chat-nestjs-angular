import { UserActionTypes, UserActionsUnion } from '../actions/user.actions';
import { User } from '../models/user';

export interface UserState extends User { }

const initialState: UserState = {
  id: undefined,
  username: undefined,
  email: undefined,
  avatar: undefined,
  access_token: undefined
};

export function reducer(
  state = initialState,
  action: UserActionsUnion
): User {
  switch (action.type) {

    case UserActionTypes.GetUserDataSuccess:
    case UserActionTypes.SetUserData: {
      const {id, username, email, access_token, avatar} = action.payload
      return {
        ...state,
        id: id,
        username: username,
        email: email,
        avatar: avatar,
        access_token: access_token
      }
    }

    case UserActionTypes.LogoutUser:
    case UserActionTypes.GetUserDataFail: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getUserId = (state: UserState) => state.id;
export const getUserName = (state: UserState) => state.username;
export const getUserEmail = (state: UserState) => state.email;
export const getUserAccessToken = (state: UserState) => state.access_token;