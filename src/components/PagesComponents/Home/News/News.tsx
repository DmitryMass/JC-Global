import { FC } from 'react';
//
import NewsItem from './NewsItem/NewsItem';
//
import { INews } from '@/types/newsTypes';

const News: FC = () => {
  return (
    <>
      {futureNews.length ? (
        futureNews.map((item: INews) => <NewsItem item={item} key={item.id} />)
      ) : (
        <p>Новин наразі немає</p>
      )}
    </>
  );
};

const futureNews: INews[] = [
  {
    id: '1',
    title:
      'Т Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam unde quisquam ipsa voluptatibus fugit sint placeat ex ut, assumenda amet voluptatum perspiciatis ratione velit?',
    header: 'Новини про React',
    data: '25.05.2023',
  },
];

export default News;
