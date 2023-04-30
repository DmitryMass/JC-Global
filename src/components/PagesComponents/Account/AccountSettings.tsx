import { FC } from 'react';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { useGetEmployeeQuery } from '@/store/api/employeesApi';
import MemberEditForm from '../Team/MemberEditForm';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import { CustomError } from '@/types/errors';
import BackBtn from '@/components/BackBtn/BackBtn';
import Loader from '@/components/Loader/Loader';

const AccountSettings: FC = () => {
  const user = useTypedSelector((state) => state.persistSlice.authData);
  const { isLoading, isError, error, data } = useGetEmployeeQuery(
    user?.id as string,
    { skip: !user?.id }
  );

  return (
    <ContentWrapper>
      {isError && (
        <ErrorModal
          isError={isError}
          error={(error as CustomError)?.data?.msg}
        />
      )}
      <div className='bg-white rounded-[6px] shadow-md p-[20px]'>
        <div className='flex items-center gap-[10px] mb-[20px]'>
          <BackBtn />
          <h1 className='font-semibold text-l leading-l max-[768px]:text-m max-[768px]:leading-m'>
            Редагування особистої інформації
          </h1>
        </div>
        {isLoading && <Loader />}
        {data?._id ? <MemberEditForm data={data} /> : null}
      </div>
    </ContentWrapper>
  );
};

export default AccountSettings;
