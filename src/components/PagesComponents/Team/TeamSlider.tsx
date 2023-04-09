import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//
import { Navigation } from 'swiper';
import EmployeeItem from './EmployeeItem';
//
import { arrow } from '@/data/svgStore';
//
import 'swiper/css/navigation';
import '@/styles/scss-styles/team.scss';
import 'swiper/css';
//
interface ITeamSliderProps {
  swiperInstance: string;
  employees: any[];
}

const TeamSlider: FC<ITeamSliderProps> = ({ swiperInstance, employees }) => {
  const prevClass = `prev-${swiperInstance}`;
  const nextClass = `next--${swiperInstance}`;
  return (
    <div className='relative flex items-center gap-[5px]'>
      <button
        className={`prev w-[35px] h-[35px] max-[576px]:w-[25px] max-[576px]:h-[25px] block  ${prevClass}`}
      >
        <img className='max-w-full' src={arrow} alt='next btn' />
      </button>
      <Swiper
        className={`${swiperInstance} flex-1`}
        slidesPerView={3}
        spaceBetween={5}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        modules={[Navigation]}
      >
        {employees.length
          ? employees.map((item) => (
              <SwiperSlide key={item.id}>
                <EmployeeItem item={item} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
      <button
        className={`next w-[35px] h-[35px] max-[576px]:w-[25px] max-[576px]:h-[25px] block ${nextClass}`}
      >
        <img className='scale-x-[-1] max-w-full' src={arrow} alt='next btn' />
      </button>
    </div>
  );
};

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
};

export default TeamSlider;
