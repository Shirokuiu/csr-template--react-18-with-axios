export type InputTextProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (evt: EvtInputText) => void;
};

export type EvtInputText = {
  target: {
    name: string;
    value: string;
  };
};
