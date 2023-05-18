import { FC, memo } from 'react';
import { useNewsChanges } from '@/hooks/useNewsChanges';
import { Field, Formik } from 'formik';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
//
import { convertDate } from '@/utils/additionalFunc/dateConvert';
import { INews } from '@/types/newsTypes';
import { CustomError } from '@/types/errors';
import { admin, close, deleteLogo, edit } from '@/data/svgStore';
//
import { newsItemStyles } from '@/styles/newsItem';
import { formStyles } from '@/styles/formsStyles';

export interface INewsItemProps {
  item: INews;
}

// сделать отдельные компоненты для формы и данных

const NewsItem: FC<INewsItemProps> = ({
  item: { header, text, imgPath, createdAt, _id },
}) => {
  const {
    deleteNews,
    error,
    isError,
    isLoading,
    isEdit,
    handleEdit,
    user,
    setIsEdit,
    isEditError,
    isEditLoading,
    editError,
  } = useNewsChanges(_id as string);
  const date = convertDate(createdAt);
  return (
    <div className={newsItemStyles.wrapper}>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      {isEditError ? (
        <ErrorModal
          isError={isEditError}
          error={(editError as CustomError)?.data?.msg}
        />
      ) : null}
      {isEdit === _id ? (
        <div className='mb-[20px]'>
          <Formik
            initialValues={{ header: header, text: text }}
            onSubmit={handleEdit}
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
                <div className='w-full'>
                  <label className='block w-full relative' htmlFor='header'>
                    {touched.header && errors.header && (
                      <span className={formStyles.formError}>
                        {errors.header}
                      </span>
                    )}
                    <Field
                      className={formStyles.input}
                      id='header'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.header}
                      name='header'
                      placeholder='Заголовок новини'
                    />
                  </label>
                  <label className='block w-full relative' htmlFor='text'>
                    {touched.text && errors.text && (
                      <span className={formStyles.formError}>
                        {errors.text}
                      </span>
                    )}
                    <Field
                      className={`${formStyles.textarea} mb-[10px]`}
                      id='text'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.text}
                      name='text'
                      component='textarea'
                      placeholder='Текст новини'
                    />
                  </label>
                </div>
                <div className='flex items-center justify-between gap-[20px]'>
                  <ButtonSubmit modificator={newsItemStyles.sendEditDataBtn}>
                    {isEditLoading ? <Loader /> : 'Оновити'}
                  </ButtonSubmit>
                  <button
                    onClick={() => setIsEdit(null)}
                    className='bg-blue-600 px-[10px] py-[5px]  h-full rounded-[6px]  hover:shadow-md'
                  >
                    <img
                      className='w-[20px] h-[20px]'
                      src={close}
                      alt='closeBtn'
                    />
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      ) : (
        <>
          <div className={newsItemStyles.titleImgContainer}>
            <img className='w-[40px]' src={admin} alt='admin photo' />
            <div className='flex items-center w-full'>
              <div className='grow'>
                <h2 className={newsItemStyles.title}>{header}</h2>
                <span className={newsItemStyles.data}>{date}</span>
              </div>
              {user?.role === 'admin' ? (
                <div className={newsItemStyles.adminBtns}>
                  <button onClick={() => setIsEdit(_id as string)}>
                    <img className='w-[25px]' src={edit} alt='edit' />
                  </button>
                  <button
                    onClick={() =>
                      deleteNews({ id: _id as string, role: user.role })
                    }
                  >
                    {isLoading ? (
                      <Loader />
                    ) : (
                      <img className='w-[25px]' src={deleteLogo} alt='delete' />
                    )}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <p className={newsItemStyles.text}>{text}</p>
        </>
      )}
      <div className='flex flex-wrap gap-[5px]'>
        {imgPath.length
          ? imgPath.map((img) => (
              <img
                key={img}
                className={`${newsItemStyles.img}`}
                src={`https://jc-server.onrender.com/assets/${img}`}
                alt='news img'
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default memo(NewsItem);
