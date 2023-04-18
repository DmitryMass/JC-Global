import { FC, memo } from 'react';
import { useArchivedCompanyGoalMutation } from '@/store/api/goalsApi';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import Loader from '../Loader/Loader';
import ErrorModal from '../ErrorModal/ErrorModal';
//
import { convertDate } from '@/utils/additionalFunc/dateConvert';
import { archive, edit } from '@/data/svgStore';
import { goalsStyle } from '@/styles/goalsStyles';
import { CustomError } from '@/types/errors';
import { useDispatch } from 'react-redux';
import useActions from '@/store/storeHooks/useActions';
import { useLocation } from 'react-router-dom';

interface Props {
  month: string;
  createdAt: string;
  _id: string;
}

const GoalsAndArchiveItemTitle: FC<Props> = ({ createdAt, month, _id }) => {
  const [archivedGoals, { isLoading, isError, error }] =
    useArchivedCompanyGoalMutation();
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const created = convertDate(createdAt);
  const dispatch = useDispatch();
  const { setEditData } = useActions();
  const { pathname } = useLocation();
  return (
    <div className='flex justify-between items-center mb-[10px]'>
      {isError ? (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      ) : null}
      <h3 className={goalsStyle.month}>{month}</h3>
      <div className='flex items-center gap-[17px]'>
        {user?.role === 'admin' ? (
          <>
            <button onClick={() => archivedGoals(_id as string)}>
              {isLoading ? (
                <Loader />
              ) : (
                <img className='w-[25px]' src={archive} alt='archived' />
              )}
            </button>
            {pathname !== '/archive' ? (
              <button
                onClick={() =>
                  dispatch(setEditData({ month, id: _id, createdAt: created }))
                }
              >
                <img className='w-[25px]' src={edit} alt='edit' />
              </button>
            ) : null}
          </>
        ) : null}
        <span className='text-sm leading-sm font-medium text-gray'>
          {created}
        </span>
      </div>
    </div>
  );
};

export default memo(GoalsAndArchiveItemTitle);
