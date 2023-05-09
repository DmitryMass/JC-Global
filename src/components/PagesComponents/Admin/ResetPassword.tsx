import { FC } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { useResetPassMutation } from '@/store/api/auth';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { resetValidation } from '@/utils/validationSchemas/resetValidation';
import { CustomError } from '@/types/errors';
import { formStyles } from '@/styles/formsStyles';

const ResetPassword: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [resetPass, { isLoading, isError, isSuccess, error }] =
    useResetPassMutation();

  const handleReset = async (
    values: { email: string },
    actions: FormikHelpers<{ email: string }>
  ) => {
    const body = new FormData();
    body.append('email', values.email);
    actions.resetForm();
    try {
      await resetPass({ data: body, role: user?.role as string });
    } catch (err) {
      console.error(err, 'Помилка при відновленні паролю Клієнт');
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
      {isSuccess ? (
        <SuccessModal
          isSuccess={isSuccess}
          data='Новий пароль успішно відправлено на пошту співробітника.'
        />
      ) : null}
      <div>
        <h3 className='my-[40px] text-center font-bold text-classic leading-classic'>
          Відновлення паролю співробітнику
        </h3>
        <Formik
          onSubmit={handleReset}
          initialValues={{
            email: '',
          }}
          validationSchema={resetValidation}
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
              <label
                className='block mb-[20px] relative font-semibold text-blue-500 cursor-pointer'
                htmlFor='email'
              >
                {touched.email && errors.email && (
                  <span className={formStyles.formError}>{errors.email}</span>
                )}
                Пошта
                <Field
                  className={`${formStyles.blueInput} mt-[5px]`}
                  id='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type='email'
                  name='email'
                  placeholder='Введіть пошту співробітника'
                />
              </label>
              <ButtonSubmit modificator='flex justify-center w-full bg-blue-700 shadow-sm shadow-blue-400 hover:shadow-md hover:shadow-blue-300 transition-all duration-150 p-[10px] rounded-[4px] text-white text-l leading-l mb-[20px]'>
                {isLoading ? <Loader /> : 'Відправити'}
              </ButtonSubmit>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
