import { USER_GET_DATA_SUCCESS, USER_GET_DATA_REQUEST, USER_GET_DATA_FAIL, SINGLE_GET_DATA_SUCCESS, SINGLE_GET_DATA_FAIL } from '../reduxTypes/index';
const initialState = {
  dealData: [],
  error: ''
};
function dealDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case USER_GET_DATA_REQUEST:
      return '';
    case USER_GET_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case USER_GET_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
function dealSingleDataReducer(state = initialState, action: any) {
  switch (action.type) {
   
    case SINGLE_GET_DATA_SUCCESS:
      return { ...state, payload: action.payload };
    case SINGLE_GET_DATA_FAIL:
      return { ...state, payload: [], error: '' };
    default:
      return state;
  }
}
export { dealDataReducer ,dealSingleDataReducer};
