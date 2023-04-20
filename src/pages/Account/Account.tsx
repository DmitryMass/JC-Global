import { FC } from 'react';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Plans from '@/components/Plans/Plans';
//
import TeamMemberInfo from '../TeamMember/TeamMemberInfo';
import { useGetEmployeeQuery } from '@/store/api/employeesApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { CustomError } from '@/types/errors';
import TeamMemberPlans from '../TeamMember/TeamMemberPlans';
import AddActiveEmployeePlan from '@/components/PagesComponents/Account/AddActiveEmployeePlan';
import TeamMemberSchedule from '../TeamMember/TeamMemberSchedule';
//

const Account: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const { isLoading, isError, error, data, refetch } = useGetEmployeeQuery(
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
          <AddActiveEmployeePlan refetch={refetch} data={data} />
          <TeamMemberPlans data={data} />
          <TeamMemberSchedule />
        </>
      ) : null}
    </ContentWrapper>
  );
};

export default Account;
