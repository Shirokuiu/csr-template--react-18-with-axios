import { InputCheckbox } from 'src/components/shared/input-checkbox/types';

export const changeCheckboxChecked = (
  checboxes: InputCheckbox[],
  checkboxValues: string[],
): InputCheckbox[] =>
  checboxes.map((checkbox: InputCheckbox) => ({
    ...checkbox,
    isChecked: checkboxValues.includes(checkbox.value ?? ''),
  }));
