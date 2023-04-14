import { FC } from 'react';

const SecretPanel: FC = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[15px] h-[50vh]'>
      <h3 className='text-xxl leading-xxl font-bold text-center'>
        Це дуже секретна панель
      </h3>
      <span className='font-medium'>Тільки для Адміністратора</span>
    </div>
  );
};

export default SecretPanel;
