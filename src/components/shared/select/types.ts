import { PropsWithCssClassName } from 'src/type/shared';

export type SelectProps = PropsWithCssClassName<{
  id?: string;
  value?: string;
  name?: string;
  options?: Option[];
  onChange?: (evt: EvtSelect) => void;
}>;

export type Option = {
  key: number;
  value: string;
  label: string;
};

export type EvtSelect = {
  target: {
    name: string;
    value: string;
  };
};
