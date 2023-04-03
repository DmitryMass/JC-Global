import { useCallback, useState } from 'react';
import { INewsFormValues } from '@/types/newsFormValues';
import { FormikHelpers } from 'formik';
import { useDropzone } from 'react-dropzone';

export const useNewsSubmit = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleSubmitNews = async (
    values: INewsFormValues,
    actions: FormikHelpers<INewsFormValues>
  ) => {
    actions.resetForm();
    console.log(values, file);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
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
  };
};
