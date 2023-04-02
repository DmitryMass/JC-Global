import { FC, ReactNode } from 'react';

interface IButtonSubmitProps {
  children: string | ReactNode;
  modificator?: string;
  isDisabled?: boolean;
}

const ButtonSubmit: FC<IButtonSubmitProps> = ({
  children,
  isDisabled = false,
  modificator,
}) => {
  return (
    <button className={modificator} type='submit' disabled={isDisabled}>
      {children}
    </button>
  );
};

export default ButtonSubmit;
