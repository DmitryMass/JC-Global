import { FC } from 'react';

const TMPlanForm: FC = () => {
  return (
    <div className='bg-gray bg-opacity-20 w-full rounded-[6px] p-[20px] mb-[20px]'>
      Test Form
      <div className='flex flex-col gap-[5px] text-black'>
        <select defaultValue={'ww'} name='' id=''>
          <option value='def'>Default </option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <input type='text' placeholder='random text' />
        <input type='text' placeholder='random text' />
        <input type='text' placeholder='random text' />
        <input type='text' placeholder='random text' />
        <input type='text' placeholder='random text' />
      </div>
    </div>
  );
};

export default TMPlanForm;
