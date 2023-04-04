import { FC, memo } from 'react';
//
import admin from '@/assets/icons/admin1.svg';
import { INews } from '@/types/newsTypes';
import { newsItemStyles } from '@/styles/newsItem';
import { convertDate } from '@/utils/additionalFunc/dateConvert';

export interface INewsItemProps {
  item: INews;
}

const NewsItem: FC<INewsItemProps> = ({
  item: { header, text, imgPath, createdAt },
}) => {
  const date = convertDate(createdAt);
  return (
    <div className={newsItemStyles.wrapper}>
      <div className={newsItemStyles.titleImgContainer}>
        <img className='w-[35px]' src={admin} alt='admin photo' />
        <h2 className={newsItemStyles.title}>{header}</h2>
        <span className={newsItemStyles.data}>{date}</span>
      </div>
      <p className={newsItemStyles.text}>{text}</p>
      <div className='flex flex-wrap gap-[10px]'>
        {imgPath.length
          ? imgPath.map((img) => (
              <img
                key={img}
                className={newsItemStyles.img}
                src={`http://localhost:5005/assets/${img}`}
                alt='test-img'
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default memo(NewsItem);
