import { FC } from 'react';
import { Formik, Field } from 'formik';
//
import ButtonSubmit from '../../../Buttons/ButtonSubmit/ButtonSubmit';
import { useNewsSubmit } from '@/hooks/useNewsSubmit';
//
import { add } from '@/data/svgStore';
import { admin } from '@/data/svgStore';
import { homeNewsStyles } from '@/styles/homeNewsStyles';

const NewsField: FC = () => {
  const { file, getInputProps, getRootProps, handleSubmitNews, isDragActive } =
    useNewsSubmit();

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
            <div className={homeNewsStyles.inputWrapper}>
              <img className='w-[45px]' src={admin} alt='admin logo' />
              <label className='block w-full' htmlFor='text'>
                {touched.text && errors.text && (
                  <span className=''>{errors.text}</span>
                )}
                <Field
                  className={homeNewsStyles.input}
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
            <div className={homeNewsStyles.dropzoneWrapper}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <img className='w-[25px]' src={add} alt='add img' />
                ) : (
                  <div className='flex items-center gap-[10px]'>
                    <span className={homeNewsStyles.fileNameSpan}>
                      {file?.name}
                    </span>
                    <img className='w-[25px]' src={add} alt='add img' />
                  </div>
                )}
              </div>
              <ButtonSubmit modificator={homeNewsStyles.submitBtnModificator}>
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
