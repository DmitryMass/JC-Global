import { FC, useEffect, useState } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
//
import Logo from '@/components/Logo/Logo';
import '@/styles/scss-styles/login.scss';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';

interface ILoginValues {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = (
    values: ILoginValues,
    actions: FormikHelpers<ILoginValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='bgc'>
      <div
        className={`bg-white px-[30px]   rounded-br-[180px] rounded-bl-[180px] h-full max-w-[350px] w-full mr-auto ${
          isOpen ? 'translate-y-[0%]' : 'translate-y-[-100%]'
        } transition-all duration-[1500ms] flex flex-col`}
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
                  <label className='block mb-[20px]' htmlFor='email'>
                    <Field
                      className='outline-none border-[2px] border-darkBlue border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50'
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
                      className='outline-none border-[2px] border-darkBlue border-opacity-20 rounded-[4px] w-full p-[10px] font-semibold text-m leading-m bg-blue-50'
                      id='password'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </label>
                  <ButtonSubmit modificator='block w-full bg-darkBlue p-[10px] rounded-[4px] text-white text-l leading-l'>
                    Login
                  </ButtonSubmit>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className='pb-[50px] flex justify-center items-center gap-[20px]'>
          <span>GIT</span> <span>LINKD</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
