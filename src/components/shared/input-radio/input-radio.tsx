import React from 'react';

import { InputRadioProps } from 'src/components/shared/input-radio/types';

function InputRadio({
  children = 'Radio',
  id = 'radio',
  value = 'radioItem',
  name = 'radioGroup',
  checkedValue = '',
  className = '',
  onRadioChange = () => undefined,
}: InputRadioProps) {
  const handleChange = () => {
    onRadioChange({ target: { name, value } });
  };

  return (
    <label className={`input-radio ${className}`.trim()}>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={handleChange}
        defaultChecked={checkedValue === value}
        className="input-radio__input"
      />
      <span className="input-radio__icon" />
      <span className="input-radio__text">{children}</span>
    </label>
  );
}

export default InputRadio;
