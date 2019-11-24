import {
  GET_CUSTOMERS,
  CUSTOMER_ERROR
} from '../actions/constants';

const initialState = {
  customers: [],
  customer: null,
  loading: true,
  error: {}
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: payload,
        loading: false
      };
    case CUSTOMER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}