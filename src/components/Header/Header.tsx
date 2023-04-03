import { FC } from 'react';
import { Link } from 'react-router-dom';
//
import Logo from '../Logo/Logo';
//
import { headerStyles } from '@/styles/headerStyles';

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.wrapper} header__container`}>
        <Logo
          imgModificator
          modificator='w-[120px] h-[60px] min-[768px]:ml-[20px]'
        />
        <Link className='block text-white' to={'/account'}>
          Личн.Каб (Фото)
        </Link>
      </div>
    </header>
  );
};

export default Header;
