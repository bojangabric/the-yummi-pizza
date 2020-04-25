import React from 'react';

const Input = ({ label, placeholder, type, name, onchange }) => {
  return (
    <label className="block">
      <span className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</span>
      <input
        onChange={onchange}
        name={name}
        type={type}
        className="form-input mt-1 block w-full"
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Input;
