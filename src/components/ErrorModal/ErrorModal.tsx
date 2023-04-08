import { close } from '@/data/svgStore';
import { errorStyles } from '@/styles/errorStyles';
import { FC, useState } from 'react';

interface IErrorModalProps {
  isError: boolean;
  error?: string;
}
const ErrorModal: FC<IErrorModalProps> = ({ isError, error }) => {
  const [showModal, setShowModal] = useState<boolean>(isError);

  if (!showModal) {
    return null;
  }

  return (
    <div className={errorStyles.fixedWrapper}>
      <div className={errorStyles.contentWrapper}>
        <span className={errorStyles.errorText}>
          {error ? error : 'Сервер наразі відключено.'}
        </span>
        <button
          className={errorStyles.closeBtn}
          onClick={() => setShowModal(false)}
        >
          <img src={close} alt='close' />
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
