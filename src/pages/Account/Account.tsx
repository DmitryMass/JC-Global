import { FC } from 'react';
import { useGetEmployeeQuery } from '@/store/api/employeesApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import TeamMemberInfo from '../TeamMember/TeamMemberInfo';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import TeamMemberPlans from '../TeamMember/TeamMemberPlans';
import AddActiveEmployeePlan from '@/components/PagesComponents/Account/AddActiveEmployeePlan';
import TeamMemberSchedule from '../TeamMember/TeamMemberSchedule';
//
import { CustomError } from '@/types/errors';

const Account: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const { isLoading, isError, error, data } = useGetEmployeeQuery(
    user?.id as string,
    { skip: !user?.id }
  );

  return (
    <ContentWrapper>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      {isLoading ? <DoubleSkelet /> : null}
      {data ? (
        <>
          <TeamMemberInfo data={data} />
          <AddActiveEmployeePlan data={data} />
          <TeamMemberPlans data={data} />
          <TeamMemberSchedule data={data} id={user?.id as string} />
        </>
      ) : null}
    </ContentWrapper>
  );
};

export default Account;
