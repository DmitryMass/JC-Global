import { FC, useCallback, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useDropzone } from 'react-dropzone';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
//
import { add } from '@/data/svgStore';
import { IRegisterValues } from '@/types/registerFormValues';
import BackBtn from '@/components/BackBtn/BackBtn';

const EmployeeRegister: FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/svg+xml': ['.svg'],
    },
  });

  const handleSubmit = async (
    values: IRegisterValues,
    actions: FormikHelpers<IRegisterValues>
  ) => {
    console.log(values);
    actions.resetForm();
    try {
      //   const body = new FormData();
      //   Object.entries(values).forEach((item) => {
      //     body.append(item[0], item[1]);
      //   });
      //   file && body.append('file', file);
      //   setFile(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='max-w-[768px] w-full mx-auto px-[15px]'>
      <div className='flex justify-start items-center gap-[15px] mb-[20px]'>
        <BackBtn />
        <h3 className='text-l leading-l font-semibold '>Новий співробітник</h3>
      </div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
          fullName: '',
          phoneNumber: '',
          jobTitle: '',
          category: '',
        }}
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
            <div>
              <label className='block mb-[20px]' htmlFor='email'>
                <Field
                  className='outline-none border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 placeholder:text-blue-400 placeholder:font-medium placeholder:opacity-70'
                  id='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                />
              </label>
              <label className='block mb-[20px]' htmlFor='password'>
                <Field
                  className='outline-none border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 placeholder:text-blue-400 placeholder:font-medium placeholder:opacity-70'
                  id='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
              </label>
            </div>
            <div className='flex gap-[15px] items-center'>
              <label className='block mb-[20px] flex-1' htmlFor='fullName'>
                <Field
                  className='outline-none border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 placeholder:text-blue-400 placeholder:font-medium placeholder:opacity-70'
                  id='fullName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  name='fullName'
                  placeholder='ПІБ'
                />
              </label>
              <label className='block mb-[20px] flex-1' htmlFor='phoneNumber'>
                <Field
                  className='outline-none border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 placeholder:text-blue-400 placeholder:font-medium placeholder:opacity-70'
                  id='phoneNumber'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  name='phoneNumber'
                  placeholder='Номер телефону'
                />
              </label>
            </div>
            <div className='flex gap-[15px] items-center'>
              <label className='block mb-[20px] flex-1' htmlFor='jobTitle'>
                <Field
                  className='outline-none border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 placeholder:text-blue-400 placeholder:font-medium placeholder:opacity-70'
                  id='jobTitle'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobTitle}
                  name='jobTitle'
                  placeholder='Посада'
                />
              </label>
              <label className='block mb-[20px] flex-1' htmlFor='category'>
                <Field
                  className='outline-none border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 placeholder:text-blue-400 placeholder:font-medium placeholder:opacity-70'
                  id='category'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  name='category'
                  placeholder='Відділення'
                />
              </label>
            </div>
            <div className='mb-[20px]' {...getRootProps()}>
              <input {...getInputProps()} />
              {!acceptedFiles.length ? (
                <div className=' border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 flex justify-center items-center gap-[15px]'>
                  <img
                    className='w-[25px] cursor-pointer'
                    src={add}
                    alt='add img'
                  />
                  <span className='text-sm leading-sm text-gray text-ellipsis grow overflow-hidden whitespace-nowrap'>
                    Додайте фото співробітника
                  </span>
                </div>
              ) : (
                <div className='border-[2px] border-blue-600 border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50 flex justify-center items-center gap-[10px]'>
                  <img
                    className='w-[25px] cursor-pointer'
                    src={add}
                    alt='add img'
                  />
                  <span className='text-sm leading-sm text-gray text-ellipsis grow overflow-hidden whitespace-nowrap'>
                    {file?.name}
                  </span>
                </div>
              )}
            </div>
            <ButtonSubmit modificator='block w-full bg-blue-700 shadow-sm shadow-blue-400 hover:shadow-md hover:shadow-blue-300 transition-all duration-150 p-[10px] rounded-[4px] text-white text-l leading-l mb-[20px]'>
              Додати співробітника
            </ButtonSubmit>
            <span className='block border-b-[1px] border-blue-200 pb-[70px] text-right text-sm leading-sm text-blue-600'>
              Відновити пароль
            </span>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EmployeeRegister;
