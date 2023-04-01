import { headerStyles } from '@/styles/headerStyles';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.wrapper} header__container`}>
        <Logo />
        <Link className='block text-white' to={'/account'}>
          Личн.Каб (Фото)
        </Link>
      </div>
    </header>
  );
};

export default Header;
