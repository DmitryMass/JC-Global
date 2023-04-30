import { IOptions } from '@/types/scheduleTypes';

export const optionsSchedule: IOptions[] = [
  { value: '8:00 - 18:00', label: '8:00 - 18:00' },
  { value: '8:00 - 14:00', label: '8:00 - 14:00' },
  { value: '12:00 - 18:00', label: '12:00 - 18:00' },
  { value: 'Вихідний', label: 'Вихідний' },
  { value: 'Відпустка', label: 'Відпустка' },
  { value: 'Лікарняний', label: 'Лікарняний' },
  { value: 'Сім.об або інше', label: 'Сім.об або інше' },
  { value: 'custom', label: 'Інший час' },
];
export const optionLabel = [
  'Вихідний',
  'Відпустка',
  'Лікарняний',
  'Сім.об або інше',
];

export const opionEditData = [
  '8:00 - 18:00',
  '8:00 - 14:00',
  '12:00 - 18:00',
  'вихідний',
  'відпустка',
  'лікарняний',
  'сім.об або інше',
];
