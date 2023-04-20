import * as yup from 'yup';

export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Приклад: example@gmail.com')
    .required(`Пошта обов'язкове поле`),
  password: yup
    .string()
    .min(5, 'Мінімум 5 символів')
    .max(35, 'Максимум 35 символів')
    .required(`Пароль обов'язкове поле`),
});
