import { FC } from 'react';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import NewsField from '@/components/PagesComponents/Home/NewsField/NewsField';
import News from '@/components/PagesComponents/Home/News/News';
//
import { homeNewsStyles } from '@/styles/homeNewsStyles';

const HomeNews: FC = () => {
  return (
    <ContentWrapper>
      <div className={homeNewsStyles.wrapper}>
        <NewsField />
      </div>
      <News />
    </ContentWrapper>
  );
};

export default HomeNews;
