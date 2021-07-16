import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, closeModal } from '../../actions';
import Radiobutton from './Radiobutton';
import Checkbox from './Checkbox';
import { Dialog, Transition } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

const PizzaModal = ({ modalPizza, openModal, closeModal, addToCart }) => {
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('24cm');
  const [toppings, setToppings] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count + 1);
    if (count > 1) setCount(count - 1);
  };

  const onClose = () => {
    closeModal();
    setCount(1);
  };

  const onAddToCart = () => {
    addToCart({
      count,
      size,
      toppings,
      name: modalPizza.name,
      price_eur: modalPizza.price_eur,
      price_dollar: modalPizza.price_dollar,
      cartid: '_' + Math.random().toString(36).substr(2, 9)
    });
    setCount(1);
  };

  const radioChange = e => {
    setSize(e.target.value);
  };

  const checkboxChange = e => {
    if (e.target.checked && !toppings.includes(e.target.value)) {
      setToppings([...toppings, e.target.value]);
    } else {
      setToppings([...toppings.filter(topping => topping !== e.target.value)]);
    }
  };

  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <button
                  className="absolute top-0 right-0 mt-3 mr-3 bg-red-300 hover:bg-red-400 transition rounded-full p-1 focus:outline-none"
                  onClick={closeModal}
                >
                  <svg strokeWidth="2" viewBox="0 0 24 24" className="text-red-900 stroke-current w-6 h-6">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <div className="max-w-2xl">
                  <img src={`/images/${modalPizza.name.toLowerCase()}.jpeg`} />
                  <div className="p-10">
                    <div className="flex justify-between font-medium text-xl">
                      <div>{modalPizza.name}</div>
                      <div>
                        {modalPizza.price_eur}€ / {modalPizza.price_dollar}$
                      </div>
                    </div>
                    <div className="text-sm font-light italic mt-4">{modalPizza.description}</div>
                    <div>
                      <div className="mt-4 mb-2">Size</div>
                      <div className="grid grid-cols-2 gap-5">
                        <Radiobutton onChange={radioChange} enabled size="24cm" />
                        <Radiobutton onChange={radioChange} size="32cm" />
                      </div>
                    </div>
                    <div>
                      <div className="mt-4 mb-2">Extra toppings</div>
                      <div className="grid grid-cols-2 gap-5">
                        <Checkbox onChange={checkboxChange} topping="Ham" />
                        <Checkbox onChange={checkboxChange} topping="Cheese" />
                        <Checkbox onChange={checkboxChange} topping="Bacon" />
                        <Checkbox onChange={checkboxChange} topping="Mushrooms" />
                      </div>
                    </div>
                    <div className="text-right flex items-center flex-row-reverse mt-6">
                      <button
                        onClick={onAddToCart}
                        className="ml-4 bg-yellow-400 text-yellow-800 mt-2 h-10 flex items-center px-6 rounded"
                      >
                        Add to cart
                      </button>
                      <div className="h-10 w-32">
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button
                            onClick={() => decrementCount()}
                            className="bg-white shadow text-gray-600 hover:text-black h-full w-20 rounded-l outline-none hover:bg-gray-100 transition"
                          >
                            <MinusSmIcon className="w-5 h-6 text-gray-600 m-auto" />
                          </button>
                          <input
                            disabled
                            type="number"
                            className="outline-none focus:outline-none border-none text-center w-full bg-white shadow font-semibold text-md flex items-center text-gray-700"
                            value={count}
                          />
                          <button
                            onClick={() => incrementCount()}
                            className="bg-white shadow text-gray-600 h-full w-20 hover:text-black rounded-r hover:bg-gray-100 transition"
                          >
                            <PlusSmIcon className="w-5 h-6 text-gray-600 m-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const mapStateToProps = state => ({
  openModal: state.openModal,
  modalPizza: state.modalPizza
});

export default connect(mapStateToProps, { addToCart, closeModal })(PizzaModal);
