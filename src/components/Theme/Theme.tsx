import { FC } from 'react';
//
import dark from '@/assets/icons/dark_theme.svg';
import light from '@/assets/icons/light_theme.svg';
import { themeStyles } from '@/styles/themeStyles';

const Theme: FC = () => {
  return (
    <div className={themeStyles.wrapper}>
      <button className={themeStyles.btnLight}>
        <img className='w-[30px]' src={light} alt='ligth_theme' />
      </button>
      <button className={themeStyles.btnDark}>
        <img className='w-[30px]' src={dark} alt='dark_theme' />
      </button>
    </div>
  );
};

export default Theme;
