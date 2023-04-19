import { FC } from 'react';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Plans from '@/components/Plans/Plans';
//
import TeamMemberInfo from '../TeamMember/TeamMemberInfo';
//

const Account: FC = () => {
  return (
    <ContentWrapper>
      <div className='w-full grid grid-cols-1'>
        <div className='w-full'>
          <TeamMemberInfo
            data={{
              _id: 'string',
              role: 'string',
              email: 'strin',
              fullName: 'strin',
              phoneNumber: 'strin',
              photoPath: 'strin',
              jobTitle: 'strin',
              vacation: 'strin',
              category: 'strin',
              plans: [],
              schedule: [],
              createdAt: 'strin',
            }}
          />
        </div>
        {/* <Plans /> */}
      </div>
    </ContentWrapper>
  );
};

export default Account;

{
  /* <div className='bg-white rounded-[6px] w-[200px] p-[10px]'>
          <div className='h-[150px] w-full flex justify-center pb-[20px] border-b-[1px] border-blue-200 mb-[20px]'>
            <img className='h-full' src={admin} alt='employee photo' />
          </div>
          <div>
            <p className='text-sm font-bold leading-sm mb-[5px] text-center'>
              Moskalenko D.O.
            </p>
            <p className='text-sm font-bold leading-sm text-center mb-[5px]'>
              Junior Front end Developer
            </p>
            <p className='text-sm font-semibold leading-sm text-center mb-[3px] break-all'>
              <span className='text-gray text-sm'>Почта:</span> <br />
              dimamikron41@gmail.com
            </p>
            <p className='text-sm font-semibold leading-sm text-center mb-[3px]'>
              <span className='text-gray text-sm'>Номер:</span> 0505050505050
            </p>
            <p className='text-sm font-semibold leading-sm text-center mb-[15px]'>
              <span className='text-gray text-sm'>Отпуск дней:</span> 14
            </p>
            <Link
              className='w-full block p-[5px] bg-darkBlue text-white text-center font-medium hover:bg-blue-600 rounded-[6px] transition-all duration-200 ease-out'
              to='/settings'
            >
              Настройки
            </Link>
          </div>
        </div> */
}
