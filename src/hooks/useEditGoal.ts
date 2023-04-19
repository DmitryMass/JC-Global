import { useEditGoalMutation } from '@/store/api/goalsApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { useState } from 'react';

export const useEditGoals = (complete?: boolean) => {
  const user = useTypedSelector((state) => state.persistSlice.authData);

  const [menu, setMenu] = useState<boolean>(false);
  const [
    editGoal,
    {
      isLoading: isEditLoading,
      isError: isEditError,
      error: editError,
      isSuccess,
    },
  ] = useEditGoalMutation();

  const handleEditStatus = async (mainId: string, id: string) => {
    await editGoal({
      id: mainId,
      goalId: id as string,
      status: !complete,
      role: user?.role,
    });
    setMenu(false);
    return;
  };

  const handleEditGoal = async (
    mainId: string,
    id: string,
    newGoal: string
  ) => {
    await editGoal({
      id: mainId,
      goalId: id as string,
      status: complete,
      newGoal,
      role: user?.role,
    });
  };

  return {
    user,
    menu,
    setMenu,
    isEditLoading,
    isEditError,
    editError,
    handleEditStatus,
    handleEditGoal,
    isSuccess,
  };
};
