import { FC, useCallback, useState } from 'react';
import { Formik, Field } from 'formik';
import { FormikHelpers } from 'formik';
import { useDropzone } from 'react-dropzone';
//
import ButtonSubmit from '../../../Buttons/ButtonSubmit/ButtonSubmit';
//
import { INewsFormValues } from '@/types/newsFormValues';
import add from '@/assets/icons/add.svg';
import admin from '@/assets/icons/admin1.svg';

const NewsField: FC = () => {
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

  return (
    <>
      <Formik
        initialValues={{ text: '' }}
        onSubmit={handleSubmitNews}
        validationSchema={''}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='flex justify-start items-center gap-[20px] mb-[15px]'>
              <img className='w-[45px]' src={admin} alt='admin logo' />
              <label className='block w-full' htmlFor='text'>
                {touched.text && errors.text && (
                  <span className=''>{errors.text}</span>
                )}
                <Field
                  className='w-full outline-none border-[1px] border-opacity-25 border-black p-[10px] rounded-[4px]'
                  id='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.text}
                  name='text'
                  placeholder='Введіть нове оголошення або новину'
                />
              </label>
            </div>
            <div className='flex justify-end gap-[30px] items-center '>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <img className='w-[30px]' src={add} alt='add img' />
                ) : (
                  <div className='flex items-center gap-[15px]'>
                    <span>{file?.name}</span>
                    <img className='w-[30px]' src={add} alt='add img' />
                  </div>
                )}
              </div>

              <ButtonSubmit modificator='text-black bg-lightBlue py-[5px] px-[20px] hover:bg-darkBlue transition-all duration-75 hover:text-white'>
                Send
              </ButtonSubmit>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default NewsField;
