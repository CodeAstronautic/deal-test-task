import { Dispatch } from 'redux';
import axios from 'axios';
import { AUTH_GET_DATA_SUCCESS, AUTH_GET_DATA_FAIL } from 'app/reduxTypes';

const base_url = `https://dev-loq8-checkout.digcite.com`;
export function authApiData({ username, password }: any) {
  return (dispatch: Dispatch) => {
    const body = {
      username: username,
      password: password
    };
    axios
      .post(`${base_url}/login`, body)
      .then((json) => {
        localStorage.setItem("@auth",JSON.stringify(json?.data))
        dispatch({
          type: AUTH_GET_DATA_SUCCESS,
          payload: {
            loginData: json?.data
          }
        });
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: AUTH_GET_DATA_FAIL,
          payload: err
        });
      });
  };
}
