import { DASHBOARD_GET_DATA } from "../actions/types";

const initialState = {
  secret: ''
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_GET_DATA:
      return {
        ...state,
        secret: payload
      }
    default:
      return state;
  }
}