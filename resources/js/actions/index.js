import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_ALL_PIZZAS,
  CONFIRM_ORDER
} from '../constants/action-types';
import axios from 'axios';
import { toast } from 'react-toastify';

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

export const getAllPizzas = () => dispatch => {
  axios
    .get(`http://pizza.local/api/pizzas`)
    .then(res => res.data)
    .then(pizzas =>
      dispatch({
        type: GET_ALL_PIZZAS,
        payload: pizzas
      })
    );
};

export const confirmOrder = (customerData, cart) => dispatch => {
  axios.post(`http://pizza.local/api/customers`, customerData).then(res =>
    axios
      .post(
        `http://pizza.local/api/orders`,
        cart.map(pizza => ({ ...pizza, customer_id: res.data.id }))
      )
      .then(() =>
        dispatch({
          type: CONFIRM_ORDER
        })
      )
      .then(() =>
        toast.success('Order was successful!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true
        })
      )
  );
};
