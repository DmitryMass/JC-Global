import { FC } from 'react';
import { Formik, Field } from 'formik';
import { useNewsSubmit } from '@/hooks/useNewsSubmit';
//
import ButtonSubmit from '../../../Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { add, admin } from '@/data/svgStore';
import { CustomError } from '@/types/errors';
import { homeNewsStyles } from '@/styles/homeNewsStyles';
import { newsValidation } from '@/utils/validationSchemas/newsValidation';

const NewsField: FC = () => {
  const {
    file,
    getInputProps,
    getRootProps,
    handleSubmitNews,
    isDragActive,
    error,
    isError,
    isLoading,
  } = useNewsSubmit();

  return (
    <>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError).data?.msg}
        />
      ) : null}
      <Formik
        initialValues={{ text: '', header: '' }}
        onSubmit={handleSubmitNews}
        validationSchema={newsValidation}
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
            <div className={homeNewsStyles.inputWrapper}>
              <img className='w-[45px]' src={admin} alt='admin logo' />
              <div className='w-full'>
                <label className='block w-full relative' htmlFor='header'>
                  {touched.header && errors.header && (
                    <span className={homeNewsStyles.errorSpan}>
                      {errors.header}
                    </span>
                  )}
                  <Field
                    className={homeNewsStyles.input}
                    id='header'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.header}
                    name='header'
                    placeholder='Введіть загаловок'
                  />
                </label>
                <label className='block w-full relative' htmlFor='text'>
                  {touched.text && errors.text && (
                    <span className={homeNewsStyles.errorSpan}>
                      {errors.text}
                    </span>
                  )}
                  <Field
                    className={homeNewsStyles.textarea}
                    id='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.text}
                    name='text'
                    component='textarea'
                    placeholder='Введіть нове оголошення або новину'
                  />
                </label>
              </div>
            </div>
            <div className={homeNewsStyles.dropzoneWrapper}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <>
                    <img
                      className='w-[25px] cursor-pointer'
                      src={add}
                      alt='add img'
                    />
                  </>
                ) : (
                  <div className='flex items-center gap-[10px]'>
                    <span className={homeNewsStyles.fileNameSpan}>
                      <span> {file ? `${file.length} files` : ''}</span>
                    </span>
                    <img
                      className='w-[25px] cursor-pointer'
                      src={add}
                      alt='add img'
                    />
                  </div>
                )}
              </div>
              <ButtonSubmit modificator={homeNewsStyles.submitBtnModificator}>
                {isLoading ? <Loader /> : 'Send'}
              </ButtonSubmit>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default NewsField;
