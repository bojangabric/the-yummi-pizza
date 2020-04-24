import React from 'react';

const Radiobutton = ({ size, checked, onChange }) => {
  return (
    <div>
      <label className="bg-white flex shadow p-4 items-center rounded text-sm">
        <input
          className="form-radio"
          type="radio"
          name="size"
          checked={checked}
          value={size}
          onChange={e => onChange(e)}
        />
        <span className="ml-2">{size}</span>
      </label>
    </div>
  );
};

export default Radiobutton;
