import { FC } from 'react';
import { Link } from 'react-router-dom';
//
import { ROUTE } from '@/utils/routes';
import { logo } from '@/data/svgStore';

const Logo: FC = () => {
  return (
    <Link to={ROUTE.HOME}>
      <img
        className='w-[120px] h-[60px] min-[768px]:ml-[20px]'
        src={logo}
        alt='JC-Global'
      />
    </Link>
  );
};

export default Logo;
