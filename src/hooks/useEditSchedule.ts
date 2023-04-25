import { useState, useRef } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { useMarkTheShiftMutation } from '@/store/api/employeesApi';
import { IMarkTheShiftData } from '@/types/scheduleTypes';
import { format } from 'date-fns';

export const useEditSchedule = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [editInput, setEditInput] = useState<string>('1');
  const [markTheShift, { isLoading, isError, error }] =
    useMarkTheShiftMutation();

  const handleMark = async ({ id, month, date }: IMarkTheShiftData) => {
    const value = inputRef.current?.value;
    if (value?.length && value.trim()) {
      await markTheShift({
        id,
        month,
        date,
        schedule: value,
      });
      setEditInput('1');
      return;
    }
    alert('Помилка. Пусте поле.');
  };

  //
  const handleMemberMark = async ({
    id,
    dayWorked,
    dayWorkedCount,
    month,
    date,
  }: IMarkTheShiftData) => {
    const todayDay = format(new Date(), 'dd.MM.yyyy');
    if (todayDay !== date) {
      return alert(
        'Не можливо відмітитись, оскільки сьогоднішня дата не співпадає з відміченою'
      );
    }
    await markTheShift({
      id,
      dayWorked,
      dayWorkedCount,
      month,
      date,
    });
  };

  return {
    inputRef,
    user,
    editInput,
    setEditInput,
    isLoading,
    isError,
    error,
    handleMark,
    handleMemberMark,
  };
};
