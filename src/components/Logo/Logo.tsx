import { FC } from 'react';
import { Link } from 'react-router-dom';
//
import { ROUTE } from '@/utils/routes';
import { logo } from '@/data/svgStore';
import { logoblack } from '@/data/svgStore';

interface ILogoProps {
  imgModificator?: boolean;
  modificator?: string;
}

const Logo: FC<ILogoProps> = ({ imgModificator, modificator }) => {
  return (
    <>
      {imgModificator ? (
        <Link to={ROUTE.HOME}>
          <img className={modificator} src={logo} alt='JC-Global white' />
        </Link>
      ) : (
        <img className={modificator} src={logoblack} alt='JC-Global black' />
      )}
    </>
  );
};

export default Logo;
