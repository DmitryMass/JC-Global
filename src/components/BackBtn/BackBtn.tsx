import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
//
import { arrow } from '@/data/svgStore';

const BackBtn: FC<{ modificator?: string }> = ({ modificator }) => {
  const navigate = useNavigate();

  return (
    <button className={modificator} onClick={() => navigate(-1)}>
      <img className='w-[25px]' src={arrow} alt='back' />
    </button>
  );
};

export default BackBtn;
