import AppInput from 'src/components/shared/app-input/app-input';
import { AppInputTypes } from 'src/components/shared/app-input/types';
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
  return (
    <label htmlFor={id} className={`input-radio ${className}`.trim()}>
      <AppInput
        id={id}
        type={AppInputTypes.Radio}
        value={value}
        name={name}
        defaultChecked={checkedValue === value}
        onChange={onRadioChange}
        className="input-radio__input"
      />
      <span className="input-radio__icon" />
      <span className="input-radio__text">{children}</span>
    </label>
  );
}

export default InputRadio;
