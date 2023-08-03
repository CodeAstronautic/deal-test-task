import { combineReducers } from 'redux';
import { dealDataReducer ,dealSingleDataReducer} from './deals';
import { authDataReducer } from './auth';

export const rootReducer = combineReducers({
  dealDataList: dealDataReducer,
  authDataList: authDataReducer,
  singleDealData: dealSingleDataReducer,
});
