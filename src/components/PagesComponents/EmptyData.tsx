import { FC } from 'react';
import { empty } from '@/data/imagesStore';
import { goalsStyle } from '@/styles/goalsStyles';

const EmptyData: FC<{ title: string }> = ({ title }) => {
  return (
    <div
      className={`${goalsStyle.goalsItemWrapper} flex justify-between items-center gap-[30px]`}
    >
      <h3 className='text-l leading-l font-semibold'>{title}</h3>
      <img
        className='max-w-[40px] w-full self-center'
        src={empty}
        alt='empty folder'
      />
    </div>
  );
};

export default EmptyData;
