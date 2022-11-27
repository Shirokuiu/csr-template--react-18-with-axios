import AppInput from 'src/components/shared/app-input/app-input';
import { AppInputTypes } from 'src/components/shared/app-input/types';
import { InputEmailProps } from 'src/components/shared/input-email/types';

function InputEmail({
  id = 'input-email',
  name = 'input-email',
  value = '',
  placeholder = '',
  className = '',
  onChange = () => undefined,
}: InputEmailProps) {
  return (
    <AppInput
      id={id}
      type={AppInputTypes.Email}
      value={value}
      name={name}
      placeholder={placeholder}
      className={`input-email ${className}`.trim()}
      onChange={onChange}
    />
  );
}

export default InputEmail;
