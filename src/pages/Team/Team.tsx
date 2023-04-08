import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import TeamSlider from '@/components/PagesComponents/Team/TeamSlider';
import { FC } from 'react';

interface Employee {
  id: number;
  name: string;
  photo: string;
}
const employees: Employee[] = [
  {
    id: 1,
    name: 'Москаленко Дмитро Олексійович',
    photo: 'photo',
  },
  {
    id: 2,
    name: 'Dmitry',
    photo: 'photo',
  },
  {
    id: 3,
    name: 'Dmitry',
    photo: 'photo',
  },
  {
    id: 4,
    name: 'Dmitry',
    photo: 'photo',
  },
  {
    id: 5,
    name: 'Dmitry',
    photo: 'photo',
  },
];

const Team: FC = () => {
  return (
    <ContentWrapper>
      <h3 className='font-semibold text-l leading-l mb-[20px]'>Наша команда</h3>
      <div className='bg-white rounded-[6px] py-[20px] px-[5px] mb-[20px] shadow-sm'>
        <h4 className='mb-[20px] text-classic leading-classic font-semibold'>
          Експерти з продажу
        </h4>
        <TeamSlider
          employees={employees}
          key='mySwiper1'
          swiperInstance='mySwiper1'
        />
      </div>
      <div className='bg-white rounded-[6px] p-[20px] mb-[20px] shadow-sm'>
        <h4 className='mb-[20px] text-classic leading-classic font-semibold'>
          Менеджмент
        </h4>
        <TeamSlider
          employees={employees}
          key='mySwiper2'
          swiperInstance='mySwiper2'
        />
      </div>
    </ContentWrapper>
  );
};

export default Team;
