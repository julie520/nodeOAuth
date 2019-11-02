import axios from "axios";
import {AUTH_SIGN_UP, AUTH_ERROR} from "./types"

export const signUp = (data) => async dispatch => {
  try {
    const res = await axios.post('/users/signup', data);
    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.error
    });
    console.error(error);
  }

}