import { FC, memo } from 'react';
import { useDeleteNewsMutation } from '@/store/api/newsApi';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { convertDate } from '@/utils/additionalFunc/dateConvert';
import { INews } from '@/types/newsTypes';
import { CustomError } from '@/types/errors';
//
import { admin, deleteLogo, edit } from '@/data/svgStore';
//
import { newsItemStyles } from '@/styles/newsItem';
import Loader from '@/components/Loader/Loader';

export interface INewsItemProps {
  item: INews;
}

const NewsItem: FC<INewsItemProps> = ({
  item: { header, text, imgPath, createdAt, _id },
}) => {
  const isAdmin = true;
  const [deleteNews, { isLoading, isError, error }] = useDeleteNewsMutation();
  const date = convertDate(createdAt);
  return (
    <div className={newsItemStyles.wrapper}>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <div className={newsItemStyles.titleImgContainer}>
        <img className='w-[40px]' src={admin} alt='admin photo' />
        <h2 className={newsItemStyles.title}>{header}</h2>
        <span className={newsItemStyles.data}>{date}</span>
        {isAdmin ? (
          <div className={newsItemStyles.adminBtns}>
            <button onClick={() => {}}>
              <img className='w-[25px]' src={edit} alt='edit' />
            </button>
            <button onClick={() => deleteNews(_id as string)}>
              {isLoading ? (
                <Loader />
              ) : (
                <img className='w-[25px]' src={deleteLogo} alt='delete' />
              )}
            </button>
          </div>
        ) : null}
      </div>
      <h2 className={newsItemStyles.titleMobile}>{header}</h2>
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
