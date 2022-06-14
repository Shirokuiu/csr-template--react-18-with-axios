import React, { ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useState } from 'react';

import { InputNumberProps } from 'src/components/shared/input-number/types';

function InputNumber({
  min,
  value = 0,
  id = 'input-number',
  name = 'input-number',
  placeholder = '0',
  className = '',
  onChange = () => undefined,
  onBlur = () => undefined,
  onKeyDownEnter = () => undefined,
}: InputNumberProps) {
  const [inputValue, setInputValue] = useState<number | string>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    onChange({ target: { name, value: +evt.target.value } });
  };

  const handleInputBlur = () => {
    onBlur({ target: { name, value: inputValue } });
  };

  const handleInputKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      onKeyDownEnter({ target: { name, value: inputValue } });
    }
  };

  const handleInputFocus = (evt: FocusEvent<HTMLInputElement>) => {
    evt.target.select();
  };

  return (
    <input
      type="number"
      id={id}
      name={name}
      min={min}
      value={inputValue}
      placeholder={placeholder}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      className={`input-number ${className}`.trim()}
    />
  );
}

export default InputNumber;
