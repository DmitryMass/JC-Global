import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEmployeeQuery } from '@/store/api/employeesApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import MemberTitle from '@/components/PagesComponents/Team/MemberTitle';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
//
import { CustomError } from '@/types/errors';
import TeamMemberInfo from './TeamMemberInfo';
import TeamMemberPlans from './TeamMemberPlans';
import TeamMemberSchedule from './TeamMemberSchedule';
import TMPlanForm from './TMPlanForm';

const TeamMember: FC = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data, refetch } = useGetEmployeeQuery(
    id as string,
    {
      skip: !id,
    }
  );

  return (
    <ContentWrapper>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <MemberTitle name={data ? data.fullName : <Loader />} />
      {isLoading ? <DoubleSkelet /> : null}
      {data ? (
        <>
          <TeamMemberInfo data={data} />
          <TMPlanForm refetch={refetch} data={data} />
          <TeamMemberPlans data={data} />
          <TeamMemberSchedule />
        </>
      ) : null}
    </ContentWrapper>
  );
};

export default TeamMember;
