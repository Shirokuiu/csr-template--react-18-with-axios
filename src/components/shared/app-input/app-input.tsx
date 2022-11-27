import React, { ChangeEvent, FocusEvent, KeyboardEvent, useEffect, useState } from 'react';

import { AppInputProps, AppInputTypes } from 'src/components/shared/app-input/types';

function AppInput({
  id = 'app-input',
  type = AppInputTypes.Text,
  min,
  name = 'app-input',
  value = '',
  placeholder = '',
  className = '',
  defaultChecked,
  onBlur = () => undefined,
  onKeyDownEnter = () => undefined,
  onChange = () => undefined,
}: AppInputProps) {
  const [inputValue, setInputValue] = useState<string | number>(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
    onChange({ target: { name, value: evt.target.value } });
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
      type={type}
      id={id}
      min={min}
      name={name}
      value={inputValue}
      placeholder={placeholder}
      defaultChecked={defaultChecked}
      onChange={handleInputChange}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      onKeyDown={handleInputKeyDown}
      className={`input-text ${className}`.trim()}
    />
  );
}

export default AppInput;
