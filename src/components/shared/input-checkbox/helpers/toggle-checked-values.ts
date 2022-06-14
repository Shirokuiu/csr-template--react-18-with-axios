import { EvtCheckboxChange } from 'src/components/shared/input-checkbox/types';

const result = new Set<string>();

export const toggleCheckedValues = <T>(checkboxChangeEvent: EvtCheckboxChange): T[] => {
  if (checkboxChangeEvent.target.isChecked) {
    result.add(checkboxChangeEvent.target.value);
  }

  if (!checkboxChangeEvent.target.isChecked) {
    result.delete(checkboxChangeEvent.target.value);
  }

  return [...(result as unknown as [])];
};
