import AppInput from 'src/components/shared/app-input/app-input';
import { AppInputTypes } from 'src/components/shared/app-input/types';
import { InputTextProps } from 'src/components/shared/input-text/types';

function InputText({
  id = 'input-text',
  name = 'input-text',
  value = '',
  placeholder = '',
  className = '',
  onChange = () => undefined,
}: InputTextProps) {
  return (
    <AppInput
      id={id}
      type={AppInputTypes.Text}
      value={value}
      name={name}
      placeholder={placeholder}
      className={`input-text ${className}`.trim()}
      onChange={onChange}
    />
  );
}

export default InputText;
