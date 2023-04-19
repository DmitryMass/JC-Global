import { FC, useCallback, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useDropzone } from 'react-dropzone';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import BackBtn from '@/components/BackBtn/BackBtn';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
//
import { add } from '@/data/svgStore';
import { IRegisterValues } from '@/types/registerFormValues';
import { useRegisterMutation } from '@/store/api/auth';
import { CustomError } from '@/types/errors';
import { formStyles } from '@/styles/formsStyles';
import { registerValidation } from '@/utils/validationSchemas/registerValidation';

const EmployeeRegister: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [register, { isLoading, isError, error, isSuccess }] =
    useRegisterMutation();
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
    multiple: false,
  });

  const handleSubmit = async (
    values: IRegisterValues,
    actions: FormikHelpers<IRegisterValues>
  ) => {
    actions.resetForm();
    try {
      const body = new FormData();
      Object.entries(values).forEach((item) => {
        body.append(item[0], item[1]);
      });
      file && body.append('file', file);
      setFile(null);
      await register({ data: body, role: user?.role as string });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='max-w-[768px] w-full mx-auto px-[15px]'>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError).data?.msg}
        />
      ) : null}
      {isSuccess ? <SuccessModal isSuccess={isSuccess} /> : null}
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
        validationSchema={registerValidation}
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
              <label className='block mb-[20px] relative' htmlFor='email'>
                {touched.email && errors.email && (
                  <span className={formStyles.formError}>{errors.email}</span>
                )}
                <Field
                  className={formStyles.blueInput}
                  id='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                />
              </label>
              <label className='block mb-[20px] relative' htmlFor='password'>
                {touched.password && errors.password && (
                  <span className={formStyles.formError}>
                    {errors.password}
                  </span>
                )}
                <Field
                  className={formStyles.blueInput}
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
              <label
                className='block mb-[20px] flex-1 relative'
                htmlFor='fullName'
              >
                {touched.fullName && errors.fullName && (
                  <span className={formStyles.formError}>
                    {errors.fullName}
                  </span>
                )}
                <Field
                  className={formStyles.blueInput}
                  id='fullName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                  name='fullName'
                  placeholder='ПІБ'
                />
              </label>
              <label
                className='block mb-[20px] flex-1 relative'
                htmlFor='phoneNumber'
              >
                {touched.phoneNumber && errors.phoneNumber && (
                  <span className={formStyles.formError}>
                    {errors.phoneNumber}
                  </span>
                )}
                <Field
                  className={formStyles.blueInput}
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
              <label
                className='block mb-[20px] flex-1 relative'
                htmlFor='jobTitle'
              >
                {touched.jobTitle && errors.jobTitle && (
                  <span className={formStyles.formError}>
                    {errors.jobTitle}
                  </span>
                )}
                <Field
                  className={formStyles.blueInput}
                  id='jobTitle'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.jobTitle}
                  name='jobTitle'
                  placeholder='Посада'
                />
              </label>
              <label
                className='block mb-[20px] flex-1 relative'
                htmlFor='category'
              >
                {touched.category && errors.category && (
                  <span className={formStyles.formError}>
                    {errors.category}
                  </span>
                )}
                <Field
                  className={formStyles.blueInput}
                  id='category'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  name='category'
                  placeholder='HR / Sales / Accountants'
                />
              </label>
            </div>
            <div className='mb-[20px]' {...getRootProps()}>
              <input {...getInputProps()} />
              {!acceptedFiles.length ? (
                <div className={formStyles.blueDropzone}>
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
                <div className={formStyles.blueDropzone}>
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
              {isLoading ? <Loader /> : 'Додати співробітника'}
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
