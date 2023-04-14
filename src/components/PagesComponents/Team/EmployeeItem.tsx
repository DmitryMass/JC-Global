import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEmployee } from '@/types/employee';
import { admin, employeeDetails } from '@/data/svgStore';
import { teamStyles } from '@/styles/teamStyles';

interface IEmployeeItemProps {
  item: IEmployee;
}

const EmployeeItem: FC<IEmployeeItemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className={teamStyles.teamSliderItem}>
      <button
        onClick={() => navigate(`/team/${item._id}`)}
        className={teamStyles.teamSliderItemDetailsBtn}
      >
        <img className='max-w-full' src={employeeDetails} alt='details' />
      </button>
      <div className={teamStyles.teamSliderItemBox}>
        <img
          className={teamStyles.teamSliderItemImg}
          src={
            item.photoPath
              ? `http://localhost:5005/assets/${item.photoPath}`
              : admin
          }
          alt='user photo'
        />
      </div>
      <div className={teamStyles.teamSliderItemBoxInfo}>
        <p className={teamStyles.teamSliderItemBoxTitle}>{item.jobTitle}</p>
        <p className={teamStyles.teamSliderItemBoxFullName}>{item.fullName}</p>
      </div>
    </div>
  );
};

export default EmployeeItem;
