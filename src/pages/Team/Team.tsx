import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import TeamSlider from '@/components/PagesComponents/Team/TeamSlider';
import { FC } from 'react';

const Team: FC = () => {
  return (
    <ContentWrapper>
      <h3>TEAM</h3>
      <div className='bg-white rounded-[6px] p-[20px] mb-[20px] shadow-sm'>
        <h4 className='mb-[20px]'>Експерти з продажу</h4>
        <TeamSlider key='mySwiper1' swiperInstance='mySwiper1' />
      </div>
      <div className='bg-white rounded-[6px] p-[20px] mb-[20px] shadow-sm'>
        <h4 className='mb-[20px]'>Менеджмент</h4>
        <TeamSlider key='mySwiper2' swiperInstance='mySwiper2' />
      </div>
    </ContentWrapper>
  );
};

export default Team;
