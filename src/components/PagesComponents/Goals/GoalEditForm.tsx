import { FC, useEffect } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useEditGoals } from '@/hooks/useEditGoal';
//
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
import Loader from '@/components/Loader/Loader';
//
import { IGoals } from '@/types/goalsTypes';
import { homeNewsStyles } from '@/styles/homeNewsStyles';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { CustomError } from '@/types/errors';

interface IGoalEditForm {
  item: IGoals;
  mainId: string;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IFormValues {
  goal: string;
}

const GoalEditForm: FC<IGoalEditForm> = ({
  item: { complete, goal, id },
  mainId,
  setEdit,
}) => {
  const { handleEditGoal, isEditError, isEditLoading, editError, isSuccess } =
    useEditGoals(complete);

  const handleSubmit = async (values: IFormValues) => {
    await handleEditGoal(mainId, id as string, values.goal);
  };

  useEffect(() => {
    if (isEditError) {
      const timeout = setTimeout(() => {
        setEdit(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isEditError]);

  useEffect(() => {
    if (isSuccess) {
      setEdit(false);
    }
  }, [isSuccess]);

  return (
    <>
      {isEditError ? (
        <ErrorModal
          isError={isEditError}
          error={(editError as CustomError)?.data?.msg}
        />
      ) : null}
      <Formik
        initialValues={{ goal: `${goal}` }}
        onSubmit={handleSubmit}
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
              <label className='block w-full relative' htmlFor='goal'>
                {touched.goal && errors.goal && (
                  <span className={homeNewsStyles.errorSpan}>
                    {errors.goal}
                  </span>
                )}
                <Field
                  className={homeNewsStyles.textarea}
                  id='goal'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.goal}
                  name='goal'
                  component='textarea'
                  placeholder='Оновлена ціль'
                />
              </label>
            </div>
            <div className={homeNewsStyles.dropzoneWrapper}>
              <ButtonSubmit modificator={homeNewsStyles.submitBtnModificator}>
                {isEditLoading ? <Loader /> : 'Update'}
              </ButtonSubmit>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default GoalEditForm;
