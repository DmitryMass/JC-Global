import { FC, memo } from 'react';
import { Field, Formik } from 'formik';
import { useEditMember } from '@/hooks/useEditMember';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
import SuccessModal from '@/components/SuccessModal/SuccessModal';
//
import { CustomError } from '@/types/errors';
import { formStyles } from '@/styles/formsStyles';
import { IEmployee } from '@/types/employee';
import { editMemberValidation } from '@/utils/validationSchemas/editMemberValidation';

const MemberEditForm: FC<{ data: IEmployee }> = ({ data }) => {
  const { handleSubmitEditedMemberData, isLoading, isError, error, isSuccess } =
    useEditMember(data._id as string);

  return (
    <div className='p-[10px]'>
      {isSuccess && <SuccessModal isSuccess={isSuccess} />}
      {isError && (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      )}
      <div className='flex flex-col gap-[5px] text-black'>
        <Formik
          onSubmit={handleSubmitEditedMemberData}
          initialValues={{
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            jobTitle: data.jobTitle,
            category: data.category,
            email: data.email,
          }}
          validationSchema={editMemberValidation}
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
              <div className='flex flex-col '>
                <label
                  className='block mb-[20px] flex-1 relative'
                  htmlFor='email'
                >
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
                    placeholder='Пошта'
                  />
                </label>
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
              <ButtonSubmit modificator='bg-blue-600 max-w-[200px] w-full flex justify-center px-[10px] py-[5px] font-medium text-white text-m leading-m rounded-[6px]'>
                {isLoading ? <Loader /> : 'Зберегти'}
              </ButtonSubmit>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default memo(MemberEditForm);
