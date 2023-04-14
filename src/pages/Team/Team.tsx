import { FC } from 'react';
import { useGetCategoriesQuery } from '@/store/api/employeesApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import TeamSlider from '@/components/PagesComponents/Team/TeamSlider';
import DoubleSkelet from '@/components/Skeletons/DoubleSkelet';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { CustomError } from '@/types/errors';
import { teamStyles } from '@/styles/teamStyles';

const Team: FC = () => {
  const { data = null, isLoading, isError, error } = useGetCategoriesQuery();

  return (
    <ContentWrapper>
      <h3 className={teamStyles.teamTitle}>Наша команда</h3>
      {isLoading ? <DoubleSkelet /> : null}
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      {data ? (
        <>
          <div className={teamStyles.teamBoxWrapper}>
            <h4 className={teamStyles.teamBoxTitle}>Експерти</h4>
            <TeamSlider
              employees={data.sales}
              key='mySwiper1'
              swiperInstance='mySwiper1'
            />
          </div>
          <div className={teamStyles.teamBoxWrapper}>
            <h4 className={teamStyles.teamBoxTitle}>Менеджери</h4>
            <TeamSlider
              employees={data.hr}
              key='mySwiper2'
              swiperInstance='mySwiper2'
            />
          </div>
          <div className={teamStyles.teamBoxWrapper}>
            <h4 className={teamStyles.teamBoxTitle}>Бухгалтери</h4>
            <TeamSlider
              employees={data.accountants}
              key='mySwiper3'
              swiperInstance='mySwiper3'
            />
          </div>
        </>
      ) : null}
    </ContentWrapper>
  );
};

export default Team;
