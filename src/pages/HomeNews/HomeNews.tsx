import { FC } from 'react';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';

const HomeNews: FC = () => {
  return (
    <ContentWrapper>
      <div className='w-full bg-white mb-[30px]'>
        Add news
        <input className='border-[1px] border-black' type='text' />
      </div>
      <div className='bg-white w-full'>
        <h1>heloo</h1>
      </div>
    </ContentWrapper>
  );
};

export default HomeNews;
