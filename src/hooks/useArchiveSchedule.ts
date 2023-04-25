import { useSetArchiveEmployeeScheduleMutation } from '@/store/api/employeesApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { IArchiveScheduleData } from '@/types/scheduleTypes';

export const useArchiveSchedule = () => {
  const [setArchive, { isLoading, isError, error }] =
    useSetArchiveEmployeeScheduleMutation();
  const user = useTypedSelector((state) => state.persistSlice.authData);

  const handleArchive = async ({ id, date, month }: IArchiveScheduleData) => {
    await setArchive({ id, date, month, role: user?.role as string });
  };

  return {
    handleArchive,
    isLoading,
    isError,
    error,
  };
};
