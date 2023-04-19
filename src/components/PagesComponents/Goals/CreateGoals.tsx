import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Field, FieldArray, FieldProps, Formik, FormikHelpers } from 'formik';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { useCreateGoalsMutation } from '@/store/api/goalsApi';
import useActions from '@/store/storeHooks/useActions';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
//
import { formStyles } from '@/styles/formsStyles';
import { CustomError } from '@/types/errors';
import { close } from '@/data/svgStore';
import { goalsValidation } from '@/utils/validationSchemas/goalValidation';

interface ICreateGoalsValues {
  month: string;
  goals: IGoals[];
}

interface IGoals {
  goal: string;
}

const CreateGoals: FC = () => {
  const [createGoals, { isLoading, isError, error }] = useCreateGoalsMutation();
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const editData = useTypedSelector(
    (state) => state.persistSlice.goalsEditData
  );
  const dispatch = useDispatch();
  const { clearData } = useActions();

  const handleSubmit = async (
    values: ICreateGoalsValues,
    actions: FormikHelpers<ICreateGoalsValues>
  ) => {
    const body = new FormData();
    body.append('month', values.month ? values.month : '');
    body.append('goals', JSON.stringify([...values.goals]));
    editData ? body.append('id', editData.id) : null;
    actions.resetForm();
    await createGoals({ body, role: user?.role as string });
    dispatch(clearData());
  };

  return (
    <div className='mb-[40px] bg-darkBlue p-[20px] rounded-[6px] bg-opacity-20'>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError).data?.msg}
        />
      ) : null}
      <Formik
        initialValues={{ month: '', goals: [{ goal: '' }] }}
        onSubmit={handleSubmit}
        validationSchema={goalsValidation}
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
            <div className='mb-[15px]'>
              <div className='w-full'>
                {editData ? (
                  <div className='mb-[20px]'>
                    <h3 className='block font-bold text-sm'>
                      Додавання цілей до місяця <span>{editData.month}</span>
                    </h3>
                    <div className='flex items-center gap-[10px]'>
                      <span className='text-sm leading-sm font-medium text-gray'>
                        Від: {editData.createdAt}
                      </span>
                      <button
                        onClick={() => dispatch(clearData())}
                        className='text-sm flex items-center gap-[5px] font-bold bg-red-300 rounded-[6px] px-[10px] py-[3px] hover:bg-red-500 transition-all duration-200'
                      >
                        Відміна
                        <img
                          className='w-[15px] h-[15px]'
                          src={close}
                          alt='close'
                        />
                      </button>
                    </div>
                  </div>
                ) : (
                  <label
                    className='block w-full relative font-bold text-sm mb-[5px]'
                    htmlFor='month'
                  >
                    Плани на місяць:
                    {touched.month && errors.month && (
                      <span className={formStyles.formError}>
                        {errors.month}
                      </span>
                    )}
                    <Field
                      className={formStyles.input}
                      id='month'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.month}
                      name='month'
                      placeholder='Січень / лютий / березень...'
                    />
                  </label>
                )}
                <FieldArray name='goals'>
                  {(fieldArrayProps) => (
                    <>
                      <div>
                        <div>
                          <button
                            className='text-black font-bold text-sm mb-[5px] bg-green-500   py-[5px] px-[10px] rounded-[6px] hover:bg-opacity-60 transition-all duration-200'
                            type='button'
                            onClick={() =>
                              fieldArrayProps.push({
                                goal: '',
                              })
                            }
                          >
                            Додати ціль
                          </button>
                        </div>
                        {values.goals.map((option: any, index: any) => (
                          <div
                            className='flex items-center mb-[2px]'
                            key={index}
                          >
                            <Field name={`goals.${index}.goal`}>
                              {(fieldProps: FieldProps) => (
                                <div className='flex items-center w-full gap-[5px]'>
                                  <input
                                    className={`${formStyles.inputGoal} grow  focus:bg-green-100 font-medium`}
                                    placeholder='Ціль'
                                    {...fieldProps.field}
                                  />
                                  <button
                                    className='block'
                                    onClick={() =>
                                      fieldArrayProps.remove(index)
                                    }
                                  >
                                    <img
                                      className='w-[25px] h-[30px]'
                                      src={close}
                                      alt='close'
                                    />
                                  </button>
                                </div>
                              )}
                            </Field>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </FieldArray>
              </div>
            </div>
            <ButtonSubmit modificator='flex justify-center items-center w-full bg-blue-700 shadow-sm shadow-blue-400 hover:shadow-md hover:shadow-blue-300 transition-all duration-150 p-[5px] rounded-[4px] text-white text-m leading-m max-w-[200px]'>
              {isLoading ? <Loader /> : 'Додати цілі'}
            </ButtonSubmit>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateGoals;
