import { FC, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useSetEmployeePlanActiveMutation } from '@/store/api/employeesApi';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { monthLabels } from '@/data/additionalData';
import { formStyles } from '@/styles/formsStyles';
import { IEmployee } from '@/types/employee';
import { CustomError } from '@/types/errors';
import { activePlanValidation } from '@/utils/validationSchemas/planValidation';
import { planStyles } from '@/styles/planStyles';

interface IInitialValues {
  frontActive: string;
  backActive: string;
}

const AddActiveEmployeePlan: FC<{ data: IEmployee; refetch: any }> = ({
  data,
  refetch,
}) => {
  const [selectData, setSelectData] = useState<string>(monthLabels[0]);
  const [setEmployeePlanActive, { isLoading, isError, error }] =
    useSetEmployeePlanActiveMutation();
  const handleSubmit = async (
    values: IInitialValues,
    actions: FormikHelpers<IInitialValues>
  ) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    body.append('month', selectData);
    actions.resetForm();
    await setEmployeePlanActive({
      data: body,
      id: data._id as string,
    });
    refetch();
  };
  return (
    <>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <div className={planStyles.wrapper}>
        <h3 className={planStyles.title}>
          Форма для зазначення виконаного плану
        </h3>
        <div className='flex flex-col gap-[5px] text-black'>
          <select
            className={`${formStyles.blueInput} text-blue-500 font-medium mb-[15px]`}
            name='select'
            onChange={(e) => setSelectData(e.target.value)}
          >
            {monthLabels.map((label) => (
              <option
                className='font-medium text-blue-500'
                key={label}
                value={label}
              >
                {label}
              </option>
            ))}
          </select>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{ frontActive: '', backActive: '' }}
            validationSchema={activePlanValidation}
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
                <div className='flex  max-[576px]:flex-col gap-[5px]'>
                  <label
                    className='block mb-[20px] flex-1 relative'
                    htmlFor='frontPlan'
                  >
                    {touched.frontActive && errors.frontActive && (
                      <span className={formStyles.formError}>
                        {errors.frontActive}
                      </span>
                    )}
                    <Field
                      className={formStyles.blueInput}
                      id='frontActive'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.frontActive}
                      type='frontActive'
                      name='frontActive'
                      placeholder='FrontEnd виконано'
                    />
                  </label>
                  <label
                    className='block mb-[20px] flex-1 relative'
                    htmlFor='backPlan'
                  >
                    {touched.backActive && errors.backActive && (
                      <span className={formStyles.formError}>
                        {errors.backActive}
                      </span>
                    )}
                    <Field
                      className={formStyles.blueInput}
                      id='backActive'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.backActive}
                      type='backActive'
                      name='backActive'
                      placeholder='BackEnd виконано'
                    />
                  </label>
                </div>
                <ButtonSubmit modificator={planStyles.submitBtn}>
                  {isLoading ? <Loader /> : 'Додати'}
                </ButtonSubmit>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddActiveEmployeePlan;
