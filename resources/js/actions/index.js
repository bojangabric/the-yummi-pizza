import { OPEN_MODAL, CLOSE_MODAL, ADD_TO_CART, REMOVE_FROM_CART } from '../constants/action-types';

export const openModal = pizza => dispatch => {
  dispatch({
    type: OPEN_MODAL,
    payload: pizza
  });
};

export const closeModal = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL
  });
};

export const addToCart = pizza => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: pizza
  });
};

export const removeFromCart = pizzaid => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: pizzaid
  });
};
