import { AUTH_SIGN_UP, AUTH_ERROR } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: '',
  errorMessage: ''
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        token: payload,
        errorMessage: ''
      }
  
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: payload,
      }
    default:
      return state;
  }
}