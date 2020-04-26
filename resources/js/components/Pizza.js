import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions';

const Pizza = props => {
  const { name, description, price_eur, price_dollar, openModal } = props;
  const img = `/images/${name.toLowerCase()}.jpeg`;

  return (
    <div className="shadow rounded overflow-hidden flex flex-col flex-grow">
      <div className="w-full">
        <img src={img} />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="font-medium">{name}</div>
        <div className="text-sm font-light italic mt-1 flex-grow">{description}</div>
        <div className="mt-5 justify-between flex items-center">
          <div className="text-blue-600">
            {price_eur}€ / {price_dollar}$
          </div>
          <div className="cursor-pointer" onClick={() => openModal(props)}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M12 4V20M20 12L4 12" stroke="#3182ce" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { openModal })(Pizza);
