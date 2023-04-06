import * as yup from 'yup';

export const newsValidation = yup.object().shape({
  text: yup.string().required('Введіть новину / оголошення'),
  header: yup.string().required('Введіть заголовок новини / оголошення'),
});
