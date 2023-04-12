import { ROUTE } from '@/utils/routes';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin: FC = () => {
  return (
    <div>
      <h1>ADMIN</h1>
      <Link to={ROUTE.ADMIN_EMP_REGISTER}>Регістрація співробітника</Link>
      <Outlet />
    </div>
  );
};

export default Admin;
