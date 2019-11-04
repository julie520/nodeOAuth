import { AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: '',
  errorMessage: ''
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SIGN_UP:
    case AUTH_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        token: payload,
        errorMessage: ''
      }
    case AUTH_SIGN_OUT:
      return initialState;
  
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: payload,
      }
    default:
      return state;
  }
}