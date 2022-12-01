import { AppInputEvt } from 'src/components/shared/app-input/types';
import { PropsWithCssClassName } from 'src/type/shared';

export type InputEmailProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (evt: AppInputEvt) => void;
}>;
