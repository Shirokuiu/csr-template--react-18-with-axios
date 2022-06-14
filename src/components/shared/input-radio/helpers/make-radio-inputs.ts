import { RadioInput } from 'src/components/shared/input-radio/types';

const getValues = (enumValue: Record<string, string>): string[] => Object.values(enumValue);

export const makeRadioInputs = (
  enumValue: Record<string, string>,
  name: string,
  defaultValue: string,
  labelMap: Record<string, string>,
): RadioInput[] => {
  const values = getValues(enumValue);

  return values.map((value, idx) => ({
    value,
    name,
    key: idx + 1,
    id: value,
    label: labelMap[value],
    checkedValue: defaultValue,
  }));
};
