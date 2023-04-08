import { FC } from 'react';
import '@/styles/scss-styles/team.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { arrow } from '@/data/svgStore';

interface ITeamSliderProps {
  swiperInstance: string;
}

const TeamSlider: FC<ITeamSliderProps> = ({ swiperInstance }) => {
  const prevClass = `prev-${swiperInstance}`;
  const nextClass = `next--${swiperInstance}`;
  return (
    <div className='relative flex items-center gap-[5px]'>
      <button className={`prev w-[35px] h-[35px] block  ${prevClass}`}>
        <img className='max-w-full' src={arrow} alt='next btn' />
      </button>
      <Swiper
        className={`${swiperInstance} flex-1`}
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        modules={[Navigation]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <button className={`next w-[35px] h-[35px] block ${nextClass}`}>
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
    slidesPerView: 3,
  },
};

export default TeamSlider;
