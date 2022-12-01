import { AppInputEvt } from 'src/components/shared/app-input/types';
import { PropsWithCssClassName } from 'src/type/shared';

export type InputNumberProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: number | string;
  placeholder?: string;
  min?: number;
  onChange?: (evt: AppInputEvt) => void;
  onBlur?: (evt: AppInputEvt) => void;
  onKeyDownEnter?: (evt: AppInputEvt) => void;
}>;
