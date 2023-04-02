import { FC } from 'react';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import NewsField from '@/components/NewsField/NewsField';

const HomeNews: FC = () => {
  return (
    <ContentWrapper>
      <div className='w-full bg-white mb-[30px] p-[20px] rounded-[8px]'>
        <NewsField />
      </div>
      <div className='bg-white w-full'>
        <h1>heloo</h1>
      </div>
    </ContentWrapper>
  );
};

export default HomeNews;
