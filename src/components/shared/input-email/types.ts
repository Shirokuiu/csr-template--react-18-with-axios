export type InputEmailProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (evt: EvtInputEmail) => void;
};

export type EvtInputEmail = {
  target: {
    name: string;
    value: string;
  };
};
