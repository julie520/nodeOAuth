import axios from "axios";
import {AUTH_SIGN_UP, AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR, DASHBOARD_GET_DATA} from "./types"

axios.defaults.headers.common['Authorization'] = localStorage.getItem('JWT_TOKEN');

export const signUp = (data,history) => async dispatch => {
  try {
    const res = await axios.post('/users/signup', data);
    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
    history.push('/dashboard');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.error
    });
    console.error(error);
  }
}

export const signIn = (data,history) => async dispatch => {
  try {
    const res = await axios.post('/users/signin', data);
    dispatch({
      type: AUTH_SIGN_IN,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
    history.push('/dashboard');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response.data.error
    });
    console.error(error);
  }
}

export const oauthGoogle = (data,history) => async dispatch => {
  console.log('we received', data);
  try {
    const res = await axios.post('/users/oauth/google', data);
    console.log(res);
    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
    history.push('/dashboard');
  } catch (error) {
    console.error(error);
  }
}

export const oauthFacebok = (data,history) => async dispatch => {
  console.log('facebook received', data);
  try {
    const res = await axios.post('/users/oauth/facebook', data);
    console.log(res);
    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
    axios.defaults.headers.common['Authorization'] = res.data.token;
    history.push('/dashboard');
  } catch (error) {
    console.error(error);
  }
}

export const getSecret = () => async dispatch => {
  try {
    const res = await axios.get('/users/secret',);
    console.log(res);
    dispatch({
      type: DASHBOARD_GET_DATA,
      payload: res.data.secret
    })
  } catch (error) {
    console.error(error);
  }
}

export const signOut = (history) => dispatch => {
  dispatch({
    type: AUTH_SIGN_OUT
  });

  localStorage.removeItem('JWT_TOKEN');
  axios.defaults.headers.common['Authorization'] = '';
  history.push("/");
}