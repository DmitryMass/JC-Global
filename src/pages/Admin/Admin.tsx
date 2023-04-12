import { FC } from 'react';
import { leftBarnMenuStyles } from '@/styles/leftBarMenuStyles';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { adminMenu } from '@/data/leftBarMenuData';

const adminStyles = {
  navActive:
    'flex flex-col items-center gap-[3px] mb-[1px] pt-[10px] pb-[5px] bg-white  text-center  flex-1 px-[10px]',
  navNonActive:
    'flex flex-col items-center gap-[3px] mb-[1px] pt-[10px] pb-[5px] hover:bg-white bg-opacityWhite text-center flex-1 px-[10px]',
};

const Admin: FC = () => {
  return (
    <div className='h-full main__container'>
      <div className='mb-[30px] pb-[20px]  border-b-[1px] border-blue-200'>
        <Link
          className='mb-[5px] inline-block text-classic leading-classic font-semibold underline text-gray hover:text-darkBlue transition-all duration-200'
          to='/'
        >
          Головна
        </Link>
        <div className='flex justify-between items-center flex-wrap gap-[5px] '>
          {adminMenu.map(({ id, link, src, title }) => (
            <NavLink
              key={id}
              to={link}
              className={({ isActive }) =>
                isActive
                  ? `${adminStyles.navActive} `
                  : `${adminStyles.navNonActive}`
              }
            >
              <img className='w-[40px]' src={src} alt='describe icon' />
              <span className={leftBarnMenuStyles.title}>{title}</span>
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
