import React, { ChangeEvent, useEffect, useState } from 'react';

import { InputEmailProps } from 'src/components/shared/input-email/types';

function InputEmail({
  id = 'input-email',
  name = 'input-email',
  value = '',
  placeholder = '',
  className = '',
  onChange = () => undefined,
}: InputEmailProps) {
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
      type="email"
      id={id}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleInputChange}
      className={`input-text ${className}`.trim()}
    />
  );
}

export default InputEmail;
