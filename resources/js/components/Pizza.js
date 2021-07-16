import { PlusSmIcon } from '@heroicons/react/solid';
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions';

const Pizza = props => {
  const { name, description, price_eur, price_dollar, openModal } = props;
  const img = `/images/${name.toLowerCase()}.jpeg`;

  return (
    <div className="flex flex-col flex-grow">
      <img src={img} className="w-full rounded" />
      <div className="py-4 flex flex-col flex-grow">
        <div className="flex justify-between">
          <div className="font-medium">{name}</div>
          <div>
            {price_eur}€ / {price_dollar}$
          </div>
        </div>
        <div className="text-sm font-light italic mt-4 flex-grow">{description}</div>
        <div className="mt-4 justify-between flex items-center">
          <div
            className="cursor-pointer inline-flex items-center text-blue-600 hover:text-blue-800 transition"
            onClick={() => openModal(props)}
          >
            <PlusSmIcon className="w-6 h-6" /> Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { openModal })(Pizza);
