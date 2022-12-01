import AppInput from 'src/components/shared/app-input/app-input';
import { AppInputTypes } from 'src/components/shared/app-input/types';
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
  return (
    <AppInput
      id={id}
      type={AppInputTypes.Number}
      value={value}
      min={min}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDownEnter={onKeyDownEnter}
      className={`input-text ${className}`.trim()}
    />
  );
}

export default InputNumber;
