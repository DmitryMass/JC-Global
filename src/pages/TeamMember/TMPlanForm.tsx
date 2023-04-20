import { FC, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
//
import { monthLabels } from '@/data/additionalData';
import { IEmployee } from '@/types/employee';
import { formStyles } from '@/styles/formsStyles';
import { useCreateEmployeePlanMutation } from '@/store/api/employeesApi';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { CustomError } from '@/types/errors';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';

interface IInitialValues {
  frontPlan: string;
  backPlan: string;
}

const TMPlanForm: FC<{ data: IEmployee; refetch: any }> = ({
  data,
  refetch,
}) => {
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
      {isLoading ? <DoubleSkelet /> : null}
      {user?.role === 'admin' ? (
        <div className='bg-gray bg-opacity-20 w-full rounded-[6px] p-[20px] mb-[20px] shadow-md'>
          <h3 className='mb-[10px] font-semibold text-darkBlue opacity-80 ml-[7px]'>
            Форма для визначення планів
          </h3>
          <div className='flex flex-col gap-[5px] text-black'>
            <select
              className={`${formStyles.blueInput} text-blue-500 font-medium`}
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
                  <div className='flex'>
                    <label
                      className='block mb-[20px] flex-1'
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
                        type='frontPlan'
                        name='frontPlan'
                        placeholder='FrontEnd план'
                      />
                    </label>
                    <label
                      className='block mb-[20px] flex-1'
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
                        type='backPlan'
                        name='backPlan'
                        placeholder='BackEnd план'
                      />
                    </label>
                  </div>
                  <ButtonSubmit modificator='flex justify-center items-center max-w-[200px] w-full bg-blue-700 shadow-sm shadow-blue-400 hover:shadow-md hover:shadow-blue-300 transition-all duration-150 p-[5px] rounded-[4px] text-white text-m leading-m mb-[10px]'>
                    {isLoading ? <Loader /> : 'Додати'}
                  </ButtonSubmit>
                  <div className='flex flex-col  text-center max-w-[200px] w-full ml-auto items-center'>
                    <span className='text-sm text-black font-bold mb-[5px]'>
                      Додати план за рік
                    </span>
                    <ButtonSubmit modificator='flex justify-center items-center max-w-[200px] w-full bg-blue-700 shadow-sm shadow-blue-400 hover:shadow-md hover:shadow-blue-300 transition-all duration-150 p-[5px] rounded-[4px] text-white text-m leading-m'>
                      В Архів
                    </ButtonSubmit>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TMPlanForm;
