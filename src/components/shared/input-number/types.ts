export type InputNumberProps = {
  id?: string;
  name?: string;
  value?: number | string;
  placeholder?: string;
  min?: number;
  className?: string;
  onChange?: (evt: EvtInputNumber) => void;
  onBlur?: (evt: EvtInputNumber) => void;
  onKeyDownEnter?: (evt: EvtInputNumber) => void;
};

export type EvtInputNumber = {
  target: {
    name: string;
    value: number | string;
  };
};
