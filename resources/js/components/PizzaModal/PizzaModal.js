import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addToCart, closeModal } from '../../actions';
import Radiobutton from './Radiobutton';
import Checkbox from './Checkbox';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    border: 'none'
  }
};

class PizzaModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      toppings: [],
      size: '24cm',
      name: '',
      price: '',
      id: ''
    };

    this.onClose = this.onClose.bind(this);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.radioChange = this.radioChange.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.modalPizza.name,
      price: nextProps.modalPizza.price,
      id:
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
    });
  }

  incrementCount() {
    this.setState(state => ({ count: state.count + 1 }));
  }

  decrementCount() {
    if (this.state.count > 1) this.setState(state => ({ count: state.count - 1 }));
  }

  onClose() {
    this.props.closeModal();
    this.setState({ count: 1 });
  }

  onAddToCart() {
    this.props.addToCart(this.state);
    this.setState({ count: 1 });
  }

  radioChange(e) {
    this.setState({
      size: e.target.value
    });
  }

  checkboxChange(e) {
    if (e.target.checked && !this.state.toppings.includes(e.target.value)) {
      this.setState({
        toppings: [...this.state.toppings, e.target.value]
      });
    } else {
      this.setState({
        toppings: this.state.toppings.filter(topping => topping !== e.target.value)
      });
    }
  }

  render() {
    return (
      <Modal
        isOpen={this.props.openModal}
        onRequestClose={this.onClose}
        overlayClassName="overlay-modal"
        style={customStyles}
        ariaHideApp={false}
      >
        <button className="absolute top-0 right-0 mt-2 mr-2" onClick={this.props.closeModal}>
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div>
          <div className="max-w-2xl">
            <img src={`/images/${this.props.modalPizza.name.toLowerCase()}.jpeg`} />
          </div>
          <div className="p-10">
            <div className="flex justify-between">
              <div className="font-medium text-xl">{this.props.modalPizza.name}</div>
              <div className="text-blue-600">{this.props.modalPizza.price}$</div>
            </div>
            <div className="text-sm font-light italic mt-1">{this.props.modalPizza.description}</div>
            <div>
              <div className="mt-4 mb-2">Size</div>
              <div className="grid grid-cols-2 gap-5">
                <Radiobutton onChange={this.radioChange} size="24cm" />
                <Radiobutton onChange={this.radioChange} size="32cm" />
              </div>
            </div>
            <div>
              <div className="mt-4 mb-2">Extra toppings</div>
              <div className="grid grid-cols-2 col-gap-5 row-gap-2">
                <Checkbox onChange={this.checkboxChange} topping="Ham" />
                <Checkbox onChange={this.checkboxChange} topping="Cheese" />
                <Checkbox onChange={this.checkboxChange} topping="Bacon" />
                <Checkbox onChange={this.checkboxChange} topping="Mushrooms" />
              </div>
            </div>
            <div className="text-right flex items-center flex-row-reverse mt-6">
              <button
                onClick={this.onAddToCart}
                className="ml-4 bg-yellow-400 text-yellow-800 mt-2 h-10 flex items-center px-6 rounded"
              >
                Add to cart
              </button>
              <div className="h-10 w-32">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                  <button
                    onClick={() => this.decrementCount()}
                    className="bg-white shadow text-gray-600 hover:text-black h-full w-20 rounded-l outline-none"
                  >
                    <span className="m-auto text-2xl font-thin">−</span>
                  </button>
                  <input
                    disabled
                    type="number"
                    className="outline-none focus:outline-none text-center w-full bg-white shadow font-semibold text-md flex items-center text-gray-700 outline-none"
                    value={this.state.count}
                  />
                  <button
                    onClick={() => this.incrementCount()}
                    className="bg-white shadow text-gray-600 h-full w-20 hover:text-black rounded-r"
                  >
                    <span className="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  openModal: state.openModal,
  modalPizza: state.modalPizza
});

export default connect(mapStateToProps, { addToCart, closeModal })(PizzaModal);
