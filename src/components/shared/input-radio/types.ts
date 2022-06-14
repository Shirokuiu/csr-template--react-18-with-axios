import { ReactNode } from 'react';

export type InputRadioProps = {
  id?: string;
  name?: string;
  value?: string;
  checkedValue?: string;
  className?: string;
  onRadioChange?: (evt: EvtRadio) => void;
  children?: ReactNode;
};

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
