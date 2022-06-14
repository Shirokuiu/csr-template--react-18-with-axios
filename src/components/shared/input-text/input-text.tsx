import React, { ChangeEvent, useEffect, useState } from 'react';

import { InputTextProps } from 'src/components/shared/input-text/types';

function InputText({
  id = 'input-text',
  name = 'input-text',
  value = '',
  placeholder = '',
  className = '',
  onChange = () => undefined,
}: InputTextProps) {
  const [inputValue, setInputValue] = useState<string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    onChange({ target: { name, value: evt.target.value } });
  };

  return (
    <input
      type="text"
      id={id}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
      className={`input-text ${className}`.trim()}
    />
  );
}

export default InputText;
