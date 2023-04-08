import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className='animate-spin border-[3px] border-gray-400 border-t-[3px] border-t-darkBlue rounded-full w-[25px] h-[25px]'></div>
  );
};

export default Loader;
