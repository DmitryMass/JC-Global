import { FC } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
//
import Theme from '../Theme/Theme';
//
import { leftBarMenu } from '@/data/leftBarMenuData';
//
import { admin, archive, backToScreen } from '@/data/svgStore';
import { leftBarnMenuStyles } from '@/styles/leftBarMenuStyles';
import Logo from '../Logo/Logo';
import { ROUTE } from '@/utils/routes';

interface ILeftBarMenusProps {
  wrapperModificator: string;
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftBarMenus: FC<ILeftBarMenusProps> = ({
  wrapperModificator,
  setMenu,
}) => {
  const navigate = useNavigate();
  const closeMenuOnLinkClick = (navigate?: NavigateFunction) => {
    if (setMenu && navigate) {
      navigate(ROUTE.HOME);
      setMenu(false);
      return;
    } else if (setMenu) {
      setMenu(false);
      return;
    }
    return null;
  };

  return (
    <div className={wrapperModificator}>
      <div
        onClick={() => setMenu!(false)}
        className='min-[768px]:hidden block absolute top-[15px] right-[15px] p-[5px]'
      >
        <img className='w-[35px]' src={backToScreen} alt='back to screen' />
      </div>
      <div className='max-[768px]:w-full max-[768px]:mb-[140px]'>
        <div
          className='min-[768px]:hidden'
          onClick={() => closeMenuOnLinkClick(navigate)}
        >
          <Logo modificator='max-h-[100px] max-w-[250px] w-full mx-auto object-cover' />
        </div>
        {leftBarMenu.map(({ id, link, title, src }) => (
          <Link
            onClick={setMenu ? () => closeMenuOnLinkClick() : undefined}
            className={leftBarnMenuStyles.link}
            key={id}
            to={link}
          >
            <img className='w-[40px]' src={src} alt='describe icon' />
            <span className={leftBarnMenuStyles.title}>{title}</span>
          </Link>
        ))}
        <Link className={leftBarnMenuStyles.link} to={'/archive'}>
          <img className='w-[40px]' src={archive} alt='archive icon' />
          <span className={leftBarnMenuStyles.title}>Архів</span>
        </Link>
        <Link className={leftBarnMenuStyles.link} to={'/admin'}>
          <img className='w-[40px]' src={admin} alt='admin icon' />
          <span className={leftBarnMenuStyles.title}>Адмін</span>
        </Link>
      </div>
      <Theme />
    </div>
  );
};

export default LeftBarMenus;
