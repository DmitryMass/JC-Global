import * as yup from 'yup';

export const resetValidation = yup.object().shape({
  email: yup
    .string()
    .email('Приклад: example@gmail.com')
    .required(`Пошта обов'язкове поле`),
});
