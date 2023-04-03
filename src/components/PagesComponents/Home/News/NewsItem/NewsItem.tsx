import { FC, memo } from 'react';
//
import admin from '@/assets/icons/admin1.svg';
import { INews } from '@/types/newsTypes';
import { newsItemStyles } from '@/styles/newsItem';

export interface INewsItemProps {
  item: INews;
}

const NewsItem: FC<INewsItemProps> = ({ item: { header, title, data } }) => {
  return (
    <div className={newsItemStyles.wrapper}>
      <div className={newsItemStyles.titleImgContainer}>
        <img className='w-[35px]' src={admin} alt='admin photo' />
        <h2 className={newsItemStyles.title}>{header}</h2>
        <span className={newsItemStyles.data}>{data}</span>
      </div>
      <p className={newsItemStyles.text}>{title}</p>
      <div className='flex flex-wrap'>
        <img
          className={newsItemStyles.img}
          src='https://images.unsplash.com/photo-1679498815865-38e8f03c8ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='test-img'
        />
      </div>
    </div>
  );
};

export default memo(NewsItem);
