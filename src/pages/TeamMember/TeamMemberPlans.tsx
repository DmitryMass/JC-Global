import { FC, memo } from 'react';
import Plans from '@/components/Plans/Plans';
//
import { IEmployee } from '@/types/employee';
import { useGetPlans } from '@/hooks/useGetPlans';

const TeamMemberPlans: FC<{ data: IEmployee }> = ({ data }) => {
  const { backActiveData, backPlanData, frontActiveData, frontPlanData } =
    useGetPlans(data.plans);

  return (
    <div className='bg-white p-[15px] rounded-[6px] shadow-sm mb-[20px]'>
      <div className='mb-[40px] p-[10px] h-full bg-bgLightBlue rounded-[6px]'>
        <Plans
          plan={frontPlanData}
          active={frontActiveData}
          title='План продажу курсу FrontEnd.'
        />
      </div>
      <div className=' p-[10px] h-full bg-bgLightBlue rounded-[6px]'>
        <Plans
          plan={backPlanData}
          active={backActiveData}
          title='План продажу курсу BackEnd.'
        />
      </div>
    </div>
  );
};

export default memo(TeamMemberPlans);
