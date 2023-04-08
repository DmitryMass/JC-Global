import { FC } from 'react';
import NewsSkeleton from './NewsSkeleton';

const DoubleSkelet: FC = () => {
  return (
    <>
      <NewsSkeleton />
      <NewsSkeleton />
    </>
  );
};

export default DoubleSkelet;
