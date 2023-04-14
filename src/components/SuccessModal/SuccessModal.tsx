import { close } from '@/data/svgStore';
import { successStyles } from '@/styles/successStyles';
import { FC, useState } from 'react';

interface ISuccessProps {
  isSuccess: boolean;
  data?: string;
}

const SuccessModal: FC<ISuccessProps> = ({ isSuccess, data }) => {
  const [showModal, setShowModal] = useState<boolean>(isSuccess);

  if (!showModal) {
    return null;
  }

  return (
    <div className={successStyles.fixedWrapper}>
      <div className={successStyles.contentWrapper}>
        <span className={successStyles.errorText}>
          {data ? data : 'Успіх!'}
        </span>
        <button
          className={successStyles.closeBtn}
          onClick={() => setShowModal(false)}
        >
          <img src={close} alt='close' />
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
