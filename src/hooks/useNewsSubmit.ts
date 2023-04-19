import { useCallback, useState } from 'react';
import { INewsFormValues } from '@/types/newsFormValues';
import { FormikHelpers } from 'formik';
import { useDropzone } from 'react-dropzone';
import { useCreateNewsMutation } from '@/store/api/newsApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';

export const useNewsSubmit = () => {
  const [file, setFile] = useState<File[] | null>(null);
  const [createNews, { isLoading, isError, error }] = useCreateNewsMutation();
  const user = useTypedSelector((state) => state.persistSlice.authData);

  const handleSubmitNews = async (
    values: INewsFormValues,
    actions: FormikHelpers<INewsFormValues>
  ) => {
    actions.resetForm();

    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    file?.forEach((file) => {
      body.append('files', file);
    });
    setFile(null);
    await createNews({ data: body, role: user?.role as string });
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/svg+xml': ['.svg'],
    },
  });

  return {
    file,
    handleSubmitNews,
    getRootProps,
    getInputProps,
    isDragActive,
    isLoading,
    isError,
    error,
  };
};
