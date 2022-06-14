type BaseCheckbox = {
  name?: string;
  value?: string;
  id?: string;
  isChecked?: boolean;
};

export interface InputCheckboxProps extends BaseCheckbox {
  children?: JSX.Element | string;
  onChange?: (evt: EvtCheckboxChange) => void;
}

export interface Checkbox extends BaseCheckbox {
  key: number;
  label: string;
}

export type EvtCheckboxChange = {
  target: {
    name: string;
    value: string;
    isChecked: boolean;
  };
};
