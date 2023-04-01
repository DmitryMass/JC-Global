import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';

const Logo: FC = () => {
  return (
    <Link to={'/'}>
      <img
        className='w-[120px] h-[60px] min-[768px]:ml-[20px]'
        src={logo}
        alt='JC-Global'
      />
    </Link>
  );
};

export default Logo;
