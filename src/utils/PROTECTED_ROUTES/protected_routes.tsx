import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTE } from '../routes';

export const ProtectedRoute: FC<{
  user: boolean;
  children: React.ReactNode;
}> = ({ user, children }) => {
  if (!user) {
    return <Navigate to={ROUTE.LOGIN} replace />;
  }

  return <>{children}</>;
};

export const ProtectedRouteLogin: FC<{
  user: boolean;
  children: React.ReactNode;
}> = ({ user, children }) => {
  if (user) {
    return <Navigate to={ROUTE.HOME} replace />;
  }

  return <>{children}</>;
};

export const ProtectedRouteAdmin: FC<{
  role: string;
  children: React.ReactNode;
}> = ({ role, children }) => {
  if (role !== 'admin') {
    return <Navigate to={ROUTE.HOME} replace />;
  }

  return <>{children}</>;
};
