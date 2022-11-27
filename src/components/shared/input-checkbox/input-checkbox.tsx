import React, { ChangeEvent, useEffect, useState } from 'react';

import { InputCheckboxProps } from 'src/components/shared/input-checkbox/types';

function InputCheckbox({
  children,
  name = 'checkbox',
  value = 'checkbox',
  id = 'checkbox',
  isChecked = false,
  className = '',
  onChange = () => undefined,
}: InputCheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange({
      target: {
        name,
        value: evt.target.value,
        isChecked: evt.target.checked,
      },
    });
  };

  return (
    <label className={`input-checkbox ${className}`}>
      <input
        id={id}
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
        className="visually-hidden"
      />
      <span>{children}</span>
    </label>
  );
}

export default InputCheckbox;
