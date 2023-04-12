import { FC } from 'react';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { useParams } from 'react-router-dom';
import MemberTitle from '@/components/PagesComponents/Team/MemberTitle';

const TeamMember: FC = () => {
  const { id } = useParams();
  return (
    <ContentWrapper>
      <MemberTitle />
      <div className='bg-white rounded-[6px] p-[20px]'>TeamMember {id}</div>
    </ContentWrapper>
  );
};

export default TeamMember;
