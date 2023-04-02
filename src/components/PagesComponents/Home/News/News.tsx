import { FC } from 'react';
import NewsItem from './NewsItem/NewsItem';

const News: FC = () => {
  return (
    <div className='bg-white w-full rounded-[8px] p-[20px]'>
      {futureNews ? (
        futureNews.map((item) => <NewsItem item={item} key={item.id} />)
      ) : (
        <p>Новин наразі немає</p>
      )}
    </div>
  );
};

const futureNews = [
  {
    id: '1',
    title:
      'Т Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam unde quisquam ipsa voluptatibus fugit sint placeat ex ut, assumenda amet voluptatum perspiciatis ratione velit?',
    header: 'Новини про React',
    data: '25.05.2023',
  },
];

export default News;
