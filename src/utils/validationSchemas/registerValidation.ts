import * as yup from 'yup';

export const registerValidation = yup.object().shape({
  email: yup
    .string()
    .email('example@gmail.com')
    .max(70, 'Максимум 70 символів')
    .matches(/^[0-9_-a-zA-Z.@/s]*$/gi, 'Тільки Англ символи')
    .required(`Обов'язкове поле`),
  password: yup
    .string()
    .min(6, 'Мінімум 6 символів')
    .max(30, 'Максимум 30 символів')
    .required('Введіть заголовок новини'),
  jobTitle: yup
    .string()
    .min(3, 'Мінімум 3 символи')
    .required(`Обов'язкове поле`),
  category: yup
    .string()
    .matches(/^[а-яА-ЯіІєЄїЇ'a-zA-Z]*$/gi, 'Укр та Англ символи.')
    .required(`Обов'язкове поле`),
  fullName: yup
    .string()
    .max(80, 'Максимум 80 символів')
    .required(`Обов'язкове поле`),
  phoneNumber: yup
    .string()
    .test('len', 'Від 6 до 10 цифр', (val: string | undefined) => {
      if (val === '0') return true;
      if (val?.length) {
        return val.length >= 6 && val.length <= 10;
      } else return false;
    })
    .matches(/^[0-9+/s]*$/gi, 'Цифри від 6 до 10')
    .required(`Обов'язкове поле`),
});
