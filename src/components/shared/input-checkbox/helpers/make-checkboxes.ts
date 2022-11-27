import { InputCheckbox } from 'src/components/shared/input-checkbox/types';

const getValues = (enumValue: Record<string, string>): string[] => Object.values(enumValue);

export const makeCheckboxes = (
  enumValue: Record<string, string>,
  name: string,
  labelMap: Record<string, string>,
): InputCheckbox[] => {
  const values = getValues(enumValue);

  return values.map((type, idx) => ({
    key: idx + 1,
    id: type,
    value: type,
    label: labelMap[type],
    isChecked: false,
    name,
  }));
};
