import { FC } from 'react';
import { Link } from 'react-router-dom';
//
import Theme from '../Theme/Theme';
//
import { leftBarMenu } from '@/data/leftBarMenuData';
//
import { admin } from '@/data/svgStore';
import { leftBarnMenuStyles } from '@/styles/leftBarMenuStyles';

const LeftBarMenus: FC = () => {
  return (
    <div className={leftBarnMenuStyles.wrapper}>
      <div>
        {leftBarMenu.map(({ id, link, title, src }) => (
          <Link className={leftBarnMenuStyles.link} key={id} to={link}>
            <img className='w-[40px]' src={src} alt='describe icon' />
            <span className={leftBarnMenuStyles.title}>{title}</span>
          </Link>
        ))}
        <Link className={leftBarnMenuStyles.link} to={'/admin'}>
          <img className='w-[40px]' src={admin} alt='admin icon' />
          <span className={leftBarnMenuStyles.title}>Admin</span>
        </Link>
      </div>
      <Theme />
    </div>
  );
};

export default LeftBarMenus;
