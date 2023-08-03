import { Dispatch } from 'redux';
import axios from 'axios';
import { SINGLE_GET_DATA_FAIL, SINGLE_GET_DATA_SUCCESS, USER_GET_DATA_FAIL, USER_GET_DATA_SUCCESS } from 'app/reduxTypes';
const base_url = `https://dev-loq8-checkout.digcite.com`;
export function fetchApiData(_id:any) {
  return (dispatch: Dispatch) => {
    axios
      .get(`${base_url}/deals?page=${_id}`)
      .then((json) => {
        dispatch({
          type: USER_GET_DATA_SUCCESS,
          payload: {
            dealData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_GET_DATA_FAIL,
          payload: {
            dealError: err
          }
        });
      });
  };
}
export function fetchApiSingleData(deal_id:any) {
  return (dispatch: Dispatch) => {
    axios
      .get(`${base_url}/deals/${deal_id}`)
      .then((json) => {
        dispatch({
          type: SINGLE_GET_DATA_SUCCESS,
          payload: {
            dealData: json?.data
          }
        });
      })
      .catch((err) => {
        dispatch({
          type: SINGLE_GET_DATA_FAIL,
          payload: {
            dealError: err
          }
        });
      });
  };
}
