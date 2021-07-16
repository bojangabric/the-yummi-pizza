import React from 'react';

const Checkbox = ({ topping, onChange }) => {
  return (
    <div>
      <label className="bg-white flex border p-4 items-center rounded text-sm">
        <input className="form-checkbox" type="checkbox" value={topping} onChange={e => onChange(e)} />
        <span className="ml-2">{topping}</span>
      </label>
    </div>
  );
};

export default Checkbox;
