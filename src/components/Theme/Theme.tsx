import { FC } from 'react';
//

import { themeStyles } from '@/styles/themeStyles';
import { dark, light } from '@/data/svgStore';

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
