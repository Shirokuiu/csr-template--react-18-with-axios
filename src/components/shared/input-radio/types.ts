import { ReactNode } from 'react';

import { PropsWithCssClassName } from 'src/type/shared';

export type InputRadioProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: string;
  checkedValue?: string;
  onRadioChange?: (evt: EvtRadio) => void;
  children?: ReactNode;
}>;

export type RadioInput = {
  key: number;
  id: string;
  value: string;
  name: string;
  label: string;
  checkedValue: string;
};

export type EvtRadio = {
  target: {
    name: string;
    value: string;
  };
};
