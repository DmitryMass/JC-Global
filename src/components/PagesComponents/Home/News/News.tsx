import { FC } from 'react';
//
import NewsItem from './NewsItem/NewsItem';
//
import { INews } from '@/types/newsTypes';
import { useGetNewsQuery } from '@/store/api/newsApi';

const News: FC = () => {
  const { data = [], isLoading, isError } = useGetNewsQuery();

  console.log(data);
  return (
    <>
      {data.length ? (
        data.map((item: INews) => <NewsItem item={item} key={item._id} />)
      ) : (
        <p>Новин наразі немає</p>
      )}
    </>
  );
};

export default News;
