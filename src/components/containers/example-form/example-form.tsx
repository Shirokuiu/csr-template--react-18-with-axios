import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import { buildSelectOptions } from 'src/components/containers/example-form/helpers/build-select-options';
import { RadioValue } from 'src/components/containers/example-form/types';
import { toggleCheckedValues } from 'src/components/shared/input-checkbox/helpers/toggle-checked-values';
import InputCheckbox from 'src/components/shared/input-checkbox/input-checkbox';
import { EvtCheckboxChange } from 'src/components/shared/input-checkbox/types';
import InputEmail from 'src/components/shared/input-email/input-email';
import InputNumber from 'src/components/shared/input-number/input-number';
import InputRadio from 'src/components/shared/input-radio/input-radio';
import InputText from 'src/components/shared/input-text/input-text';
import Select from 'src/components/shared/select/select';
import { Option } from 'src/components/shared/select/types';

function ExampleForm() {
  const [options] = useState<Option[]>(buildSelectOptions);

  const formik = useFormik({
    initialValues: {
      text: '',
      number: '',
      email: '',
      radioGroup: '',
      select: '',
      checkboxes: [],
    },
    validationSchema: Yup.object({
      text: Yup.string().required('Обязательное поле'),
      number: Yup.number().required('Обязательное поле'),
      email: Yup.string()

        .email('Введите корректный email')
        .required('Обязательное поле'),
      radioGroup: Yup.string().required('Выберите значение'),
      select: Yup.string().required('Выберите значение'),
      checkboxes: Yup.array().min(1, 'Выберите хотя бы одно значение'),
    }),
    onSubmit: (values: FormikValues) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  const handleCheckboxChange = (evt: EvtCheckboxChange) => {
    formik.setFieldValue('checkboxes', toggleCheckedValues<string[]>(evt));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <ul>
        <li>
          <InputText
            id="text"
            name="text"
            value={formik.values.text}
            onChange={formik.handleChange}
          />
          {formik.touched.text && formik.errors.text && <p>{formik.errors.text}</p>}
        </li>
        <li>
          <InputNumber
            id="number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
          />
          {formik.touched.number && formik.errors.number && <p>{formik.errors.number}</p>}
        </li>
        <li>
          <InputEmail
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
        </li>
        <li>
          <InputRadio
            id="radio"
            value={RadioValue.Yes}
            name="radioGroup"
            checkedValue={formik.values.radioGroup}
            onRadioChange={formik.handleChange}
          >
            Yes
          </InputRadio>
          <InputRadio
            id="radio"
            value={RadioValue.No}
            name="radioGroup"
            checkedValue={formik.values.radioGroup}
            onRadioChange={formik.handleChange}
          >
            no
          </InputRadio>
          {formik.touched.radioGroup && formik.errors.radioGroup && (
            <p>{formik.errors.radioGroup}</p>
          )}
        </li>
        <li>
          <Select
            id="select"
            name="select"
            value={formik.values.select}
            options={options}
            onChange={formik.handleChange}
          />
          {formik.touched.select && formik.errors.select && <p>{formik.errors.select}</p>}
        </li>
        <li>
          <InputCheckbox
            id="checkbox1"
            name="checkboxes"
            value="checkbox1"
            onChange={handleCheckboxChange}
          >
            Checkbox1
          </InputCheckbox>
          <InputCheckbox
            id="checkbox2"
            name="checkboxes"
            value="checkbox2"
            onChange={handleCheckboxChange}
          >
            Checkbox2
          </InputCheckbox>
          <InputCheckbox
            id="checkbox3"
            name="checkboxes"
            value="checkbox3"
            onChange={handleCheckboxChange}
          >
            Checkbox3
          </InputCheckbox>
          {formik.touched.checkboxes && formik.errors.checkboxes && (
            <p>{formik.errors.checkboxes}</p>
          )}
        </li>
        <li>
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  );
}

export default ExampleForm;
