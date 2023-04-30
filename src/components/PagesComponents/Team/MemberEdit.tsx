import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEmployeeQuery } from '@/store/api/employeesApi';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import BackBtn from '@/components/BackBtn/BackBtn';
import MemberEditForm from './MemberEditForm';
import EmptyData from '../EmptyData';
import Loader from '@/components/Loader/Loader';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
//
import { CustomError } from '@/types/errors';

const MemberEdit: FC = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data, isFetching } = useGetEmployeeQuery(
    id as string,
    {
      skip: !id,
    }
  );
  return (
    <ContentWrapper>
      <div className='bg-white p-[20px] rounded-[6px]'>
        {isError && (
          <ErrorModal
            isError={isError}
            error={(error as CustomError)?.data?.msg}
          />
        )}
        <div className='flex items-center gap-[10px] mb-[20px]'>
          <BackBtn />
          <h1 className='font-semibold text-l leading-l'>
            Редагування даних співробітника
          </h1>
        </div>
        {isLoading ? <Loader /> : null}
        {data?._id ? <MemberEditForm data={data} /> : null}
        {!data?._id && !isFetching && (
          <EmptyData title='Не знайдено інформації по співробітнику' />
        )}
      </div>
    </ContentWrapper>
  );
};

export default MemberEdit;
