import React, { Component } from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { confirmOrder } from '../../actions';
import { toast } from 'react-toastify';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      interphone: '',
      floor: '',
      phone: '',
      email: '',
      notice: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  confirmOrder() {
    for (var field in this.state) {
      if (this.state[field] === '' && field !== 'notice') {
        toast.error('Fill out all the fields!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true
        });

        return;
      } else if (this.props.cart && this.props.cart.length < 1) {
        toast.error('Select at least one pizza to order!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true
        });

        return;
      }
    }

    this.props.confirmOrder(this.state, this.props.cart);
  }

  render() {
    return (
      <div className="w-full max-w-xl">
        <div className="flex mb-5">
          <div className="w-1/2 pr-4">
            <Input onchange={this.handleChange} name="firstname" type="text" placeholder="John" label="First Name" />
          </div>
          <div className="w-1/2 pl-4">
            <Input onchange={this.handleChange} name="lastname" type="text" placeholder="Doe" label="Last Name" />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-full mb-6 md:mb-0">
            <Input
              onchange={this.handleChange}
              name="address"
              type="text"
              placeholder="725 Strickland St"
              label="Street Address"
            />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-1/2 pr-4">
            <Input onchange={this.handleChange} name="interphone" type="text" placeholder="Doe" label="Interphone" />
          </div>
          <div className="w-1/2 pl-4">
            <Input onchange={this.handleChange} name="floor" type="text" placeholder="1" label="Floor" />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-full">
            <Input onchange={this.handleChange} name="phone" type="text" placeholder="202-555-0114" label="Phone" />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-full">
            <Input onchange={this.handleChange} name="email" type="email" placeholder="john@email.com" label="E-mail" />
          </div>
        </div>

        <div className="flex mb-5">
          <div className="w-full">
            <label className="block">
              <span className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Notice</span>
              <textarea
                onChange={this.handleChange}
                name="notice"
                className="form-textarea mt-1 block w-full"
                rows="4"
                placeholder="Directions, or something..."
              ></textarea>
            </label>
          </div>
        </div>

        <button
          onClick={this.confirmOrder}
          className="w-full bg-yellow-400 text-yellow-800 mt-6 flex justify-center px-6 py-2 rounded"
        >
          Confirm order
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { confirmOrder })(CheckoutForm);
