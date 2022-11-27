export interface InputCheckboxProps extends InputCheckboxBase {
  children?: JSX.Element | string;
  className?: string;
  onChange?: (evt: EvtCheckboxChange) => void;
}

type InputCheckboxBase = {
  name?: string;
  value?: string;
  id?: string;
  isChecked?: boolean;
};

export interface InputCheckbox extends InputCheckboxBase {
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
