import { FC, memo } from 'react';
import DatePicker from 'react-datepicker';
import { Field, FieldProps, Formik } from 'formik';
import { useSetSchedule } from '@/hooks/useSetSchedule';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
//
import { monthLabels } from '@/data/additionalData';
import { formStyles } from '@/styles/formsStyles';
import { planStyles } from '@/styles/planStyles';
import { CustomError } from '@/types/errors';
import { IOptions } from '@/types/scheduleTypes';
import { optionsSchedule } from '@/data/scheduleDate';
import 'react-datepicker/dist/react-datepicker.css';

const TMScheduleForm: FC<{ id: string }> = ({ id }) => {
  const {
    error,
    handleSubmit,
    isError,
    isLoading,
    setStartDate,
    startDate,
    user,
  } = useSetSchedule(id);
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
          <h3 className={planStyles.title}>Графік роботи співробітника</h3>
          <div className='flex flex-col gap-[5px] text-black'>
            <Formik
              onSubmit={handleSubmit}
              initialValues={{
                schedule: '8:00 - 18:00',
                custom: '',
                month: `${monthLabels[0]}`,
              }}
              validationSchema={''}
            >
              {({ handleSubmit, values, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-[5px]'>
                    <Field
                      as='select'
                      name='month'
                      className={`${formStyles.blueInput} text-blue-500 font-medium mb-[5px]`}
                    >
                      {monthLabels.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <DatePicker
                      className={`${formStyles.blueInput} text-blue-500 font-medium mb-[5px]`}
                      selected={startDate}
                      onChange={(date: Date) => setStartDate(date)}
                      dateFormat='dd.MM.yyyy'
                      dayClassName={(date: Date) =>
                        date.getDay() === 0 || date.getDay() === 6
                          ? 'text-red-500 font-semibold'
                          : 'font-semibold'
                      }
                    />
                    <div className='flex gap-[5px] max-[576px]:flex-col mb-[10px]'>
                      <Field
                        className={`${formStyles.blueInput} text-blue-500 font-medium mb-[5px]`}
                        as='select'
                        name='schedule'
                      >
                        {optionsSchedule.map((option: IOptions) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                      {values.schedule === 'custom' && (
                        <label className='w-full' htmlFor='custom'>
                          {touched.custom && errors.custom && (
                            <span className={formStyles.formError}>
                              {errors.custom}
                            </span>
                          )}
                          <Field name='custom'>
                            {({ field, form }: FieldProps<string>) => (
                              <input
                                className={`${formStyles.blueInput} text-blue-500 font-medium mb-[5px]`}
                                type='text'
                                name={field.name}
                                value={field.value}
                                onChange={(e) => {
                                  form.setFieldValue('custom', e.target.value);
                                  field.onChange(e);
                                }}
                                onBlur={field.onBlur}
                              />
                            )}
                          </Field>
                        </label>
                      )}
                    </div>
                  </div>
                  <ButtonSubmit modificator={planStyles.submitBtn}>
                    {isLoading ? <Loader /> : 'Додати'}
                  </ButtonSubmit>
                </form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(TMScheduleForm);
