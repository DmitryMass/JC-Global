import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

interface Employee {
  id: number;
  name: string;
  photo: string;
}
interface IEmployeeItemProps {
  item: Employee;
}

const EmployeeItem: FC<IEmployeeItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/team/${item.id}`)}
      className='w-full min-h-[280px] cursor-pointer flex flex-col'
    >
      <div className='w-[110px] h-[110px] mt-[20px] mx-auto bg-black  rounded-full text-white mb-[10px]  '>
        {item.photo}
      </div>
      <div className='text-center min-h-[100px] flex-1 flex flex-col justify-center gap-[5px]'>
        <p className='text-white text-sm leading-sm font-medium'>
          Замісник Директора
        </p>
        <p className='text-white text-sm leading-sm font-medium'>{item.name}</p>
      </div>
    </div>
  );
};

export default EmployeeItem;
