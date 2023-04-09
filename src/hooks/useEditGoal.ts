import { useEditGoalMutation } from '@/store/api/goalsApi';
import { useState } from 'react';

export const useEditGoals = (complete?: boolean) => {
  const admin = true;
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
    });
  };

  return {
    admin,
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
