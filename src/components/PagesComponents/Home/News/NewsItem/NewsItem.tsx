import { FC, memo } from 'react';
import admin from '@/assets/icons/admin1.svg';

interface INewsItemProps {
  item: {
    title: string;
    header: string;
    id: string;
    data: string;
  };
}

const NewsItem: FC<INewsItemProps> = ({ item: { header, title, data } }) => {
  return (
    <div>
      <div className='flex gap-[15px] items-center mb-[20px]'>
        <img className='w-[35px]' src={admin} alt='admin photo' />
        <h2 className='text-l leading-l font-semibold text-ellipsis grow overflow-hidden whitespace-nowrap'>
          {header}
        </h2>
        <span className='font-medium text-m leading-m'>{data}</span>
      </div>
      <p className='mb-[20px] text-m leading-m font-medium'>{title}</p>
      <div className='flex flex-wrap'>
        <img
          className=' w-full object-center max-h-[400px] object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,1)] '
          src='https://images.unsplash.com/photo-1679498815865-38e8f03c8ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='test-img'
        />
      </div>
    </div>
  );
};

export default memo(NewsItem);
