import { FC, ReactNode } from 'react';
import BackBtn from '@/components/BackBtn/BackBtn';

const MemberTitle: FC<{ name?: string | ReactNode | null }> = ({ name }) => {
  return (
    <div className='flex gap-[10px] items-center mb-[20px] max-[768px]:mb-[40px]'>
      <BackBtn />
      <h3 className='text-l leading-l font-semibold '>{name}</h3>
    </div>
  );
};

export default MemberTitle;
