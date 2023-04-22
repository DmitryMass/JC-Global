import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEmployeeQuery } from '@/store/api/employeesApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import MemberTitle from '@/components/PagesComponents/Team/MemberTitle';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
import TeamMemberPlans from './TeamMemberPlans';
import TeamMemberInfo from './TeamMemberInfo';
import TMPlanForm from './TMPlanForm';
import EmptyData from '@/components/PagesComponents/EmptyData';
import TeamMemberHrPlans from './TeamMemberHrPlans';
import TMScheduleGeneral from './TMScheduleGeneral';
import TMScheduleForm from './TMScheduleForm';
//
import { CustomError } from '@/types/errors';

const TeamMember: FC = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data, isFetching } = useGetEmployeeQuery(
    id as string,
    {
      skip: !id,
    }
  );

  return (
    <ContentWrapper>
      {isError && (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      )}
      <MemberTitle name={data ? data.fullName : <Loader />} />
      {isLoading && <DoubleSkelet />}
      {data && (
        <>
          <TeamMemberInfo data={data} />
          {data?.category.toLowerCase() === 'sales' && (
            <>
              <TMPlanForm data={data} />
              <TeamMemberPlans data={data} />
            </>
          )}
          {data?.category.toLowerCase() === 'hr' && <TeamMemberHrPlans />}
          <TMScheduleForm id={id! as string} />
          <TMScheduleGeneral data={data} />
        </>
      )}
      {!data && !isFetching && (
        <EmptyData title='Не знайдено інформації по даному співробітнику' />
      )}
    </ContentWrapper>
  );
};

export default TeamMember;
