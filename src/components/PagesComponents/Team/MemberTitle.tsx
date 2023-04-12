import { FC } from 'react';
import BackBtn from '@/components/BackBtn/BackBtn';

const MemberTitle: FC = () => {
  return (
    <div className='flex gap-[10px] items-center mb-[20px]'>
      <BackBtn />
      <h3 className='text-l leading-l font-semibold '>Dmitry Moskalenko</h3>
    </div>
  );
};

export default MemberTitle;
