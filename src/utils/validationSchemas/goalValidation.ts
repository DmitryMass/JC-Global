import * as yup from 'yup';

export const goalsValidation = yup.object().shape({
  month: yup
    .string()
    .nullable()
    .oneOf(
      [
        null,
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
      ],
      'Невірна назва місяця'
    ),
  goals: yup.array().of(
    yup.object().shape({
      goal: yup.string().required(`Ціль обов'язкове поле`),
    })
  ),
});
