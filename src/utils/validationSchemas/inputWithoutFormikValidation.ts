import * as yup from 'yup';
import { opionEditData } from '@/data/scheduleDate';

export const schemaTMScheduleEdit = yup
  .string()
  .lowercase()
  .oneOf(
    opionEditData,
    'Треба обрати один з цих параметрів: "8:00 - 18:00", "8:00 - 14:00", "12:00 - 18:00", "Вихідний", "Відпустка", "Лікарняний"", "Сім.об або інше"'
  )
  .required(`Обов'язкове поле`);
