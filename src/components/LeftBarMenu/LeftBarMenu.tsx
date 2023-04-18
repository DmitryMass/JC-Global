import { FC } from 'react';
import { NavLink, NavigateFunction, useNavigate } from 'react-router-dom';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import Logo from '../Logo/Logo';
//
import { leftBarMenu } from '@/data/leftBarMenuData';
import { admin, archive, backToScreen, noPhotoUser } from '@/data/svgStore';
import { ROUTE } from '@/utils/routes';
import { leftBarnMenuStyles } from '@/styles/leftBarMenuStyles';

interface ILeftBarMenusProps {
  wrapperModificator: string;
  setMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftBarMenus: FC<ILeftBarMenusProps> = ({
  wrapperModificator,
  setMenu,
}) => {
  const user = useTypedSelector((state) => state.persistSlice.authData);

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
          <NavLink
            onClick={setMenu ? () => closeMenuOnLinkClick() : undefined}
            key={id}
            to={link}
            className={({ isActive }) =>
              isActive
                ? ` ${leftBarnMenuStyles.activeClass}`
                : `${leftBarnMenuStyles.link}`
            }
          >
            <img className='w-[40px]' src={src} alt='describe icon' />
            <span className={leftBarnMenuStyles.title}>{title}</span>
          </NavLink>
        ))}
        <NavLink
          onClick={setMenu ? () => closeMenuOnLinkClick() : undefined}
          className={({ isActive }) =>
            isActive
              ? ` ${leftBarnMenuStyles.activeClass}`
              : `${leftBarnMenuStyles.link}`
          }
          to={'/archive'}
        >
          <img className='w-[40px]' src={archive} alt='archive icon' />
          <span className={leftBarnMenuStyles.title}>Архів</span>
        </NavLink>
        {user?.role === 'admin' ? (
          <NavLink
            onClick={setMenu ? () => closeMenuOnLinkClick() : undefined}
            className={({ isActive }) =>
              isActive
                ? ` ${leftBarnMenuStyles.activeClass}`
                : `${leftBarnMenuStyles.link}`
            }
            to={'/admin'}
          >
            <img className='w-[40px]' src={admin} alt='admin icon' />
            <span className={leftBarnMenuStyles.title}>Адмін</span>
          </NavLink>
        ) : (
          <NavLink
            onClick={setMenu ? () => closeMenuOnLinkClick() : undefined}
            className={({ isActive }) =>
              isActive
                ? ` ${leftBarnMenuStyles.activeClass}`
                : `${leftBarnMenuStyles.link}`
            }
            to={'/account'}
          >
            <img
              className='w-[40px]'
              src={noPhotoUser}
              alt='employee settings'
            />
            <span className={leftBarnMenuStyles.title}>Особистий кабінет</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default LeftBarMenus;
