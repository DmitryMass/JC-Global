import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, FormikHelpers } from 'formik';
import { useLoginMutation } from '@/store/api/auth';
import useActions from '@/store/storeHooks/useActions';
//
import Logo from '@/components/Logo/Logo';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
//
import { CustomError } from '@/types/errors';
import { github, linkedin } from '@/data/svgStore';
import { formStyles } from '@/styles/formsStyles';
import '@/styles/scss-styles/login.scss';
import { loginValidation } from '@/utils/validationSchemas/loginValidation';

interface ILoginValues {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useDispatch();
  const { setAuthToken } = useActions();

  const handleSubmit = async (
    values: ILoginValues,
    actions: FormikHelpers<ILoginValues>
  ) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    actions.resetForm();
    try {
      const loginData = await login(body).unwrap();
      if (loginData.userData) {
        dispatch(setAuthToken(loginData.userData));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='bgc'>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <div
        className={`bg-white px-[30px]   rounded-br-[180px] rounded-bl-[180px] h-full max-w-[350px] w-full mr-auto ${
          isOpen ? 'translate-y-[0%]' : 'translate-y-[-100%]'
        } transition-all duration-[1500ms] flex flex-col max-[576px]:mx-auto max-[576px]:max-w-none`}
      >
        <div className='h-full'>
          <Logo modificator='max-h-[100px] max-w-[250px] w-full mx-auto object-cover' />
          <div>
            <h4 className='text-xl leading-xl font-semibold mb-[20px] '>
              Вхід
            </h4>
            <Formik
              onSubmit={handleSubmit}
              initialValues={{ email: '', password: '' }}
              validationSchema={loginValidation}
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
                  <label className='block mb-[20px] relative' htmlFor='email'>
                    {touched.email && errors.email && (
                      <span className={formStyles.formError}>
                        {errors.email}
                      </span>
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
                  <label
                    className='block mb-[20px] relative'
                    htmlFor='password'
                  >
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
                  <ButtonSubmit modificator='flex justify-center items-center w-full bg-blue-700 shadow-sm shadow-blue-400 hover:shadow-md hover:shadow-blue-300 transition-all duration-150 p-[10px] rounded-[4px] text-white text-l leading-l mb-[20px]'>
                    {isLoading ? <Loader /> : 'Увійти'}
                  </ButtonSubmit>
                  <span className='block border-b-[1px] border-blue-200 pb-[70px] text-right text-sm leading-sm text-blue-600'>
                    Скинути пароль
                  </span>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className='pb-[50px] flex justify-center items-center gap-[30px]'>
          <a href='https://github.com/DmitryMass' target='_blank'>
            <img className='w-[40px] h-[40px]' src={github} alt='github' />
          </a>
          <a
            href='https://www.linkedin.com/in/dmitry-moskalenko-69a19a226/'
            target='_blank'
          >
            <img className='w-[40px] h-[40px]' src={linkedin} alt='linkedin' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
