import { PropsWithCssClassName } from 'src/type/shared';

export type InputTextProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (evt: EvtInputText) => void;
}>;

export type EvtInputText = {
  target: {
    name: string;
    value: string;
  };
};
