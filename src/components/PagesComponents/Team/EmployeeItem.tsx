import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFireEmployeeMutation } from '@/store/api/employeesApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import Loader from '@/components/Loader/Loader';
//
import { IEmployee } from '@/types/employee';
import { admin, employeeDetails } from '@/data/svgStore';
import { teamStyles } from '@/styles/teamStyles';
import { CustomError } from '@/types/errors';

interface IEmployeeItemProps {
  item: IEmployee;
}

const EmployeeItem: FC<IEmployeeItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const [fireEmployee, { isLoading, isError, error }] =
    useFireEmployeeMutation();

  const handleDelete = async (id: string) => {
    await fireEmployee(id);
  };

  return (
    <div className={teamStyles.teamSliderItem}>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <button
        onClick={() => navigate(`/team/${item._id}`)}
        className={teamStyles.teamSliderItemDetailsBtn}
      >
        <img className='max-w-full' src={employeeDetails} alt='details' />
      </button>
      {user?.role === 'admin' ? (
        <button
          onClick={() => handleDelete(item._id!)}
          className={teamStyles.fireBtn}
        >
          {isLoading ? <Loader /> : 'Звільнити'}
        </button>
      ) : null}
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
