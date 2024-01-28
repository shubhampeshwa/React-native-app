import { combineReducers } from "redux";
import Loader from "./Loader";


const appReducer = combineReducers({ 
  Loader
});

const rootReducer = (state, action) => {
  // if (action.type === USER_LOGOUT) {
    // return appReducer(undefined, action)
  // }
  return appReducer(state, action);
};

export default rootReducer;