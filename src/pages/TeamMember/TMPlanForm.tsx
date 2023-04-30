import { FC, memo, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { useCreateEmployeePlanMutation } from '@/store/api/employeesApi';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { monthLabels } from '@/data/additionalData';
import { IEmployee } from '@/types/employee';
import { formStyles } from '@/styles/formsStyles';
import { CustomError } from '@/types/errors';
import { planValidation } from '@/utils/validationSchemas/planValidation';
import { planStyles } from '@/styles/planStyles';

interface IInitialValues {
  frontPlan: string;
  backPlan: string;
}

const TMPlanForm: FC<{ data: IEmployee }> = ({ data }) => {
  const [createEmployeePlan, { isLoading, isError, error }] =
    useCreateEmployeePlanMutation();
  const [selectData, setSelectData] = useState<string>(monthLabels[0]);
  const user = useTypedSelector((state) => state.persistSlice.authData);

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
    await createEmployeePlan({
      data: body,
      id: data._id as string,
      role: user?.role as string,
    });
  };

  return (
    <>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      {user?.role === 'admin' ? (
        <div className={planStyles.wrapper}>
          <h3 className={planStyles.title}>Форма для визначення планів</h3>
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
              initialValues={{ frontPlan: '', backPlan: '' }}
              validationSchema={planValidation}
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
                  <div className='flex max-[576px]:flex-col gap-[5px]'>
                    <label
                      className='block mb-[20px] flex-1 relative'
                      htmlFor='frontPlan'
                    >
                      {touched.frontPlan && errors.frontPlan && (
                        <span className={formStyles.formError}>
                          {errors.frontPlan}
                        </span>
                      )}
                      <Field
                        className={formStyles.blueInput}
                        id='frontPlan'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.frontPlan}
                        name='frontPlan'
                        placeholder='FrontEnd план'
                      />
                    </label>
                    <label
                      className='block mb-[20px] flex-1 relative'
                      htmlFor='backPlan'
                    >
                      {touched.backPlan && errors.backPlan && (
                        <span className={formStyles.formError}>
                          {errors.backPlan}
                        </span>
                      )}
                      <Field
                        className={formStyles.blueInput}
                        id='backPlan'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.backPlan}
                        name='backPlan'
                        placeholder='BackEnd план'
                      />
                    </label>
                  </div>
                  <ButtonSubmit modificator={planStyles.submitBtn}>
                    {isLoading ? <Loader /> : 'Додати'}
                  </ButtonSubmit>
                </form>
              )}
            </Formik>
            <div className='flex flex-col  text-center max-w-[200px] w-full ml-auto items-center max-[576px]:mx-auto'>
              <span className='text-sm font-bold mb-[5px] text-white'>
                Додати план за рік
              </span>
              <ButtonSubmit modificator={planStyles.submitBtn}>
                В Архів
              </ButtonSubmit>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(TMPlanForm);
