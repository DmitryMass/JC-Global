import { useEditEmployeeDataMutation } from '@/store/api/employeesApi';
import { FormikHelpers } from 'formik';

interface IInitialValues {
  fullName: string;
  phoneNumber: string;
  jobTitle: string;
  category: string;
  email: string;
}
export const useEditMember = (id: string) => {
  const [editEmployeeData, { isLoading, isError, isSuccess, error }] =
    useEditEmployeeDataMutation();
  const handleSubmitEditedMemberData = async (values: IInitialValues) => {
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1]);
    });
    try {
      await editEmployeeData({ data: body, id });
    } catch (err) {
      console.error(err);
    }
  };

  return {
    handleSubmitEditedMemberData,
    isLoading,
    isError,
    isSuccess,
    error,
  };
};
