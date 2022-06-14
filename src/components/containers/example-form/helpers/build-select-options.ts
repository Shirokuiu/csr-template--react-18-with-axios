import { SelectValue } from 'src/components/containers/example-form/types';
import { makeOptions } from 'src/components/shared/select/helpers/make-options';
import { Option } from 'src/components/shared/select/types';

const optionLabelMap = {
  [SelectValue.Example1]: 'Пример 1',
  [SelectValue.Example2]: 'Пример 2',
  [SelectValue.Example3]: 'Пример 3',
  [SelectValue.Example4]: 'Пример 4',
  [SelectValue.Example5]: 'Пример 5',
};

export const buildSelectOptions = (): Option[] => makeOptions(SelectValue, optionLabelMap);
