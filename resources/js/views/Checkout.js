import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import CheckoutForm from '../components/CheckoutForm/CheckoutForm';
import Cart from '../components/CheckoutForm/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  return (
    <div className="w-4/5 xl:w-3/5 mx-auto">
      <Header />

      <div className="flex">
        <div className="w-2/3 self-start">
          <CheckoutForm />
        </div>

        <div className="w-1/3">
          <Cart />
        </div>
      </div>

      <ToastContainer position="top-left" />

      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, {})(Checkout);
