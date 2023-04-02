import { FC } from 'react';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import NewsField from '@/components/PagesComponents/Home/NewsField/NewsField';
import News from '@/components/PagesComponents/Home/News/News';

const HomeNews: FC = () => {
  return (
    <ContentWrapper>
      <div className='w-full bg-white mb-[30px] p-[20px] rounded-[8px]'>
        <NewsField />
      </div>
      <News />
    </ContentWrapper>
  );
};

export default HomeNews;
