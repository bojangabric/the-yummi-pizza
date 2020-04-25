import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_PIZZAS,
  CONFIRM_ORDER
} from '../constants/action-types';

const initialState = {
  pizzas: [],
  modalPizza: { name: '', description: '', price: '' },
  openModal: false,
  cart: []
};

function rootReducer(state = initialState, action) {
  if (action.type === OPEN_MODAL) {
    return {
      ...state,
      modalPizza: action.payload,
      openModal: true
    };
  } else if (action.type === CLOSE_MODAL) {
    return {
      ...state,
      openModal: false
    };
  } else if (action.type === ADD_TO_CART) {
    return {
      ...state,
      openModal: false,
      cart: [...state.cart, action.payload]
    };
  } else if (action.type === REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter(pizza => pizza.cartid !== action.payload)
    };
  } else if (action.type === GET_ALL_PIZZAS) {
    return {
      ...state,
      pizzas: action.payload
    };
  } else if (action.type === CONFIRM_ORDER) {
    return {
      ...state,
      cart: []
    };
  }

  return state;
}

export default rootReducer;
