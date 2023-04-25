import { useState } from 'react';
import { useSetEmployeeScheduleMutation } from '@/store/api/employeesApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { FormikHelpers } from 'formik';
import { format } from 'date-fns';

interface IInitialValues {
  schedule: string;
  custom: string;
  month: string;
}

export const useSetSchedule = (id: string) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [setEmployeeSchedule, { isLoading, isError, error }] =
    useSetEmployeeScheduleMutation();

  const handleSubmit = async (
    values: IInitialValues,
    actions: FormikHelpers<IInitialValues>
  ) => {
    const formatedDate = format(startDate, 'dd.MM.yyyy');
    try {
      const body = new FormData();
      Object.entries(values).forEach((item) => {
        body.append(item[0], item[1]);
      });
      body.append('date', formatedDate);
      actions.resetForm({ values: { ...values, month: values.month } });
      await setEmployeeSchedule({ data: body, id, role: user?.role as string });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    handleSubmit,
    isError,
    isLoading,
    error,
    startDate,
    setStartDate,
    user,
  };
};
