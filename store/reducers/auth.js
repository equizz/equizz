import { AUTHENTICATE, DEAUTHENTICATE } from '../types';

const initState = {
  isLoggedIn: false,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isLoggedIn: true,
      };
    case DEAUTHENTICATE:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

export default authReducer;
