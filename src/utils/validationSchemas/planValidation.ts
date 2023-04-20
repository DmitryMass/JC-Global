import * as yup from 'yup';

export const planValidation = yup.object().shape({
  frontPlan: yup.string().matches(/^[0-9]*$/gi, 'Тільки цифри від 0 до 9'),
  backPlan: yup.string().matches(/^[0-9]*$/gi, 'Тільки цифри від 0 до 9'),
});

export const activePlanValidation = yup.object().shape({
  frontActive: yup.string().matches(/^[0-9]*$/gi, 'Тільки цифри від 0 до 9'),
  backActive: yup.string().matches(/^[0-9]*$/gi, 'Тільки цифри від 0 до 9'),
});
