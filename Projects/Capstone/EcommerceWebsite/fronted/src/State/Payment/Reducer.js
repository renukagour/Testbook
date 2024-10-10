import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_SUCCESS,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_SUCCESS,
    UPDATE_PAYMENT_FAILURE,
  } from "../actions/ActionType";
  
  // Initial state for the payment reducer
  const initialState = {
    loading: false,
    paymentData: null,
    error: null,
  };
  
  // Payment reducer function
  export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PAYMENT_REQUEST:
      case UPDATE_PAYMENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case CREATE_PAYMENT_SUCCESS:
      case UPDATE_PAYMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          paymentData: action.payload, // Payment data from the action
          error: null,
        };
  
      case CREATE_PAYMENT_FAILURE:
      case UPDATE_PAYMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload, // Error message from the action
        };
  
      default:
        return state;
    }
  };
  