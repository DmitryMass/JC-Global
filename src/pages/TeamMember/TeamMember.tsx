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

const TeamMember: FC = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetEmployeeQuery(
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
          <TeamMemberPlans />
          <TeamMemberSchedule />
        </>
      ) : null}
    </ContentWrapper>
  );
};

export default TeamMember;
