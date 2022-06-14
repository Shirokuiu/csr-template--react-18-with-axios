import { RadioInput } from 'src/components/shared/input-radio/types';

export const changeCheckedRadioInput = (
  radioInputs: RadioInput[],
  checkedValue: string,
): RadioInput[] =>
  radioInputs.map((radioInput) => ({
    ...radioInput,
    checkedValue,
  }));
