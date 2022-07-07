import { PropsWithCssClassName } from 'src/type/shared';

export type InputEmailProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (evt: EvtInputEmail) => void;
}>;

export type EvtInputEmail = {
  target: {
    name: string;
    value: string;
  };
};
