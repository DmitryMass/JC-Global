import { useState } from 'react';
import {
  useDeleteNewsMutation,
  useEditNewsMutation,
} from '@/store/api/newsApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';

export const useNewsChanges = (id: string) => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [isEdit, setIsEdit] = useState<string | null>(null);
  const [
    editNews,
    { isLoading: isEditLoading, isError: isEditError, error: editError },
  ] = useEditNewsMutation();
  const [deleteNews, { isLoading, isError, error }] = useDeleteNewsMutation();

  const handleEdit = async (values: { header: string; text: string }) => {
    try {
      await editNews({
        ...values,
        role: user?.role as string,
        id,
      });
      setIsEdit(null);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    isLoading,
    deleteNews,
    isError,
    error,
    isEdit,
    handleEdit,
    user,
    setIsEdit,
    isEditLoading,
    isEditError,
    editError,
  };
};
