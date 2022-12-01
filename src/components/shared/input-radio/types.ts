import { ReactNode } from 'react';

import { AppInputEvt } from 'src/components/shared/app-input/types';
import { PropsWithCssClassName } from 'src/type/shared';

export type InputRadioProps = PropsWithCssClassName<{
  id?: string;
  name?: string;
  value?: string;
  checkedValue?: string;
  onRadioChange?: (evt: AppInputEvt) => void;
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
