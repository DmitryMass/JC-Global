import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { FC } from 'react';

const TMPlanForm: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  return (
    <>
      {user?.role === 'admin' ? (
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
      ) : null}
    </>
  );
};

export default TMPlanForm;
