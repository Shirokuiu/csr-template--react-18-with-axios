import { Option } from 'src/components/shared/select/types';

export const changeOption = (options: Option[], selectedOptionValue: string): Option[] =>
  options.map((option) => ({
    ...option,
    isSelected: option.value === selectedOptionValue,
  }));
