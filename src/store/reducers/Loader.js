import React from 'react';
import { SET_LOADER ,PRODUCT_DETAILS} from "../types";

const INITIAL_STATE = {
  loader: false,
  productDetails:''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      }
      case PRODUCT_DETAILS:
        return{
          ...state,
          productDetails: action.payload
        }
   
    default:
      return state;
  }
}