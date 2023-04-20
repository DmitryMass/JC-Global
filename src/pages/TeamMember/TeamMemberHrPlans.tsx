import HRPlans from '@/components/Plans/HRPlans';
import { FC } from 'react';

const TeamMemberHrPlans: FC = () => {
  return (
    <div className='bg-white p-[15px] rounded-[6px] shadow-md mb-[20px]'>
      <h1>Тестовий варіант</h1>
      <HRPlans />
    </div>
  );
};

export default TeamMemberHrPlans;
