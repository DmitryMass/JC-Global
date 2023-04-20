import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div className='animate-spin border-[3px] border-gray-400 border-t-[3px] border-t-darkBlue rounded-full w-[20px] h-[20px]'></div>
  );
};

export default Loader;
