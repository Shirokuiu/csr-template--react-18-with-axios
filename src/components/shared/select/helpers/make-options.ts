import { Option } from 'src/components/shared/select/types';

const getValues = (enumValue: Record<string, string>): string[] => Object.values(enumValue);

export const makeOptions = (
  enumValue: Record<string, string>,
  labelMap: Record<string, string>,
): Option[] => {
  const values = getValues(enumValue);

  return values.map((value: string, idx) => ({
    key: idx + 1,
    value,
    label: labelMap[value],
  }));
};
