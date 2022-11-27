import { PropsWithCssClassName } from 'src/type/shared';

export type AppInputProps = PropsWithCssClassName<{
  id?: string;
  type?: AppInputTypes;
  min?: number;
  name?: string;
  value?: string | number;
  checked?: boolean;
  defaultChecked?: boolean;
  placeholder?: string;
  onBlur?: (evt: AppInputEvt) => void;
  onKeyDownEnter?: (evt: AppInputEvt) => void;
  onChange?: (evt: AppInputEvt) => void;
}>;

export type AppInputEvt = {
  target: {
    name: string;
    value: string | number;
  };
};

export enum AppInputTypes {
  Text = 'text',
  Password = 'password',
  Number = 'number',
  Email = 'email',
  Radio = 'radio',
  Checkbox = 'checkbox',
}
