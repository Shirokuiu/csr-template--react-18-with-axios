import React, { ChangeEvent, useState } from 'react';

import { SelectProps } from 'src/components/shared/select/types';
import './select.scss';

function Select({
  id = 'select',
  value = '',
  name = 'select',
  options = [],
  className = '',
  onChange = () => undefined,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  const handleSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(evt.target.value);
    onChange({ target: { name, value: evt.target.value } });
  };

  return (
    <div className={`select ${className}`.trim()}>
      <div className="select__content">
        <select
          id={id}
          name={name}
          value={selectedValue}
          disabled={options.length === 0}
          onChange={handleSelectChange}
          className="select__item"
        >
          <option value="" disabled hidden>
            Выберите значение
          </option>
          {options.map(({ key, value: optionValue, label }) => (
            <option key={key} value={optionValue}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;
