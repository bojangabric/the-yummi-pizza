import { OPEN_MODAL, CLOSE_MODAL, ADD_TO_CART } from '../constants/action-types';

const initialState = {
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
  }
  return state;
}

export default rootReducer;
