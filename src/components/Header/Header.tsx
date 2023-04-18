import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import Logo from '../Logo/Logo';
//
import { headerStyles } from '@/styles/headerStyles';
import LeftBarMenus from '../LeftBarMenu/LeftBarMenu';
import { exit, mobileMenu } from '@/data/svgStore';
import { useDispatch } from 'react-redux';
import useActions from '@/store/storeHooks/useActions';

const Header: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { logOut } = useActions();

  return (
    <header className={headerStyles.header}>
      <div className={`${headerStyles.wrapper} header__container`}>
        <Logo
          imgModificator
          modificator='w-[120px] h-[60px] min-[768px]:ml-[20px]'
        />
        <div className='flex items-center gap-[20px]'>
          <button onClick={() => dispatch(logOut())}>
            <img className='w-[30px] h-[30px]' src={exit} alt='exit' />
          </button>
          <div className='relative min-[768px]:hidden'>
            <div onClick={() => setMenu(true)}>
              <img className='w-[30px]' src={mobileMenu} alt='mobileMenu' />
            </div>
            <LeftBarMenus
              setMenu={setMenu}
              wrapperModificator={`fixed flex flex-col bg-lightBlue px-[20px] py-[20px] flex justify-center items-center top-0 right-0 w-full h-screen transition-all duration-300 ${
                menu
                  ? 'translate-y-[0%] ease-out'
                  : 'translate-y-[-100%] ease-in'
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
