import { FC } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import NewsField from '@/components/PagesComponents/Home/NewsField/NewsField';
import News from '@/components/PagesComponents/Home/News/News';
//
import { homeNewsStyles } from '@/styles/homeNewsStyles';

const HomeNews: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  return (
    <ContentWrapper>
      {user?.role === 'admin' ? (
        <div className={homeNewsStyles.wrapper}>
          <NewsField />
        </div>
      ) : null}
      <News />
    </ContentWrapper>
  );
};

export default HomeNews;
