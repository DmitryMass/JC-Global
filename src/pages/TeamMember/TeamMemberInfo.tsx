import { FC, memo, useMemo } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import { teamStyles } from '@/styles/teamStyles';
import { IEmployee } from '@/types/employee';
import { unnamed } from '@/data/imagesStore';
import { convertDate } from '@/utils/additionalFunc/dateConvert';

const TeamMemberInfo: FC<{ data: IEmployee; id?: string }> = ({ data }) => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const createDate = useMemo(
    () => convertDate(data?.createdAt as string),
    [data]
  );
  return (
    <div className={teamStyles.memberWrapper}>
      <img
        className={`${teamStyles.memberPhoto} ${
          data.photoPath ? '' : 'drop-shadow-[2px_4px_4px_rgba(0,0,0,1)]'
        }`}
        src={
          data.photoPath
            ? `http://localhost:5005/assets/${data.photoPath}`
            : unnamed
        }
        alt='photo'
      />
      <div className='h-full flex-1 bg-bgLightBlue p-[20px] rounded-[6px]'>
        <h3 className={teamStyles.memberJobTitle}>{data.jobTitle}</h3>
        <p className={teamStyles.memberAdditional}>
          <span className='text-gray mr-[5px]'>Пошта:</span> {data.email}
        </p>
        <p className={teamStyles.memberAdditional}>
          <span className='text-gray mr-[5px]'>Номер телефону:</span>{' '}
          {data.phoneNumber}
        </p>
        <p className={teamStyles.memberAdditional}>
          <span className='text-gray mr-[5px]'>Працює з:</span> {createDate}
        </p>
        {user?.id === data._id ? (
          <p className={teamStyles.memberAdditional}>
            <span className='text-gray mr-[5px]'>Днів відпустки:</span>
            {data.vacation}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default memo(TeamMemberInfo);
