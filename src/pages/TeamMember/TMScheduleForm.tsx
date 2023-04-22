import { FC, useState } from 'react';
import { Field, FieldProps, Formik, FormikHelpers } from 'formik';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
import ButtonSubmit from '@/components/Buttons/ButtonSubmit/ButtonSubmit';
//
import { monthLabels } from '@/data/additionalData';
import { formStyles } from '@/styles/formsStyles';
import { planStyles } from '@/styles/planStyles';
import { CustomError } from '@/types/errors';
import 'react-datepicker/dist/react-datepicker.css';

interface IInitialValues {
  schedule: string;
  custom: string;
  month: string;
}

const TMScheduleForm: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const user = useTypedSelector((state) => state.persistSlice.authData);

  const handleSubmit = async (
    values: IInitialValues,
    actions: FormikHelpers<IInitialValues>
  ) => {
    const formatedDate = format(startDate, 'dd.MM.yyyy');
    try {
      const body = new FormData();
      Object.entries(values).forEach((item) => {
        body.append(item[0], item[1]);
      });
      body.append('date', formatedDate);
      actions.resetForm();

      console.log({ ...values, date: formatedDate });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null} */}
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
                        {options.map((option: IOptions) => (
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
                    {/* {isLoading ? <Loader /> : 'Додати'} */}
                    Додати
                  </ButtonSubmit>
                </form>
              )}
            </Formik>
            {/* <div className='flex flex-col  text-center max-w-[200px] w-full ml-auto items-center max-[576px]:mx-auto'>
                <span className='text-sm font-bold mb-[5px] text-white'></span>
                <ButtonSubmit modificator={planStyles.submitBtn}>
                  В Архів
                </ButtonSubmit>
              </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

interface IOptions {
  value: string;
  label: string;
}
const options: IOptions[] = [
  { value: '8:00 - 18:00', label: '8:00 - 18:00' },
  { value: '8:00 - 14:00', label: '8:00 - 14:00' },
  { value: '12:00 - 18:00', label: '12:00 - 18:00' },
  { value: 'Вихідний', label: 'Вихідний' },
  { value: 'Відпустка', label: 'Відпустка' },
  { value: 'Лікарняний', label: 'Лікарняний' },
  { value: 'Сім.об або інше', label: 'Сім.об або інше' },
  { value: 'custom', label: 'Інший час' },
];

export default TMScheduleForm;
