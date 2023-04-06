import { FC } from 'react';
import { Outlet } from 'react-router-dom';
//
import LeftBarMenus from '@/components/LeftBarMenu/LeftBarMenu';
import Header from '@/components/Header/Header';
import { leftBarnMenuStyles } from '@/styles/leftBarMenuStyles';

const Home: FC = () => {
  return (
    <>
      <Header />
      <div className='main__container'>
        <LeftBarMenus wrapperModificator={leftBarnMenuStyles.wrapper} />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
