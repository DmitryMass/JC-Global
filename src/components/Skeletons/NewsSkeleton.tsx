import { FC } from 'react';

const NewsSkeleton: FC = () => {
  return (
    <div className=' w-full border-blue-300 shadow rounded-md p-4 min-h-[150px] bg-white mb-[20px]'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-lightBlue h-10 w-10'></div>
        <div className='flex-1 space-y-6 py-1 mb-[50px]'>
          <div className='h-2 bg-lightBlue rounded '></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-lightBlue rounded col-span-2'></div>
              <div className='h-2 bg-lightBlue rounded col-span-1'></div>
            </div>
            <div className='h-2 bg-lightBlue rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSkeleton;
