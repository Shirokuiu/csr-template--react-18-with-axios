import { PropsWithCssClassName } from 'src/type/shared';

export type InputNumberProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: number | string;
  placeholder?: string;
  min?: number;
  onChange?: (evt: EvtInputNumber) => void;
  onBlur?: (evt: EvtInputNumber) => void;
  onKeyDownEnter?: (evt: EvtInputNumber) => void;
}>;

export type EvtInputNumber = {
  target: {
    name: string;
    value: number | string;
  };
};
