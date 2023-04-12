import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
//
import AboutUs from '@/pages/AboutUs/AboutUs';
import Goals from '@/pages/Goals/Goals';
import Home from '@/pages/Home/Home';
import HomeNews from '@/pages/HomeNews/HomeNews';
import Login from '@/pages/Login/Login';
//
import { ROUTE } from '@/utils/routes';
import {
  ProtectedRoute,
  ProtectedRouteAdmin,
  ProtectedRouteLogin,
} from '@/utils/PROTECTED_ROUTES/protected_routes';
//
import './App.scss';
import Archive from '@/pages/Archive/Archive';
import Team from '@/pages/Team/Team';
import TeamMember from '@/pages/TeamMember/TeamMember';
import Admin from '@/pages/Admin/Admin';
import EmployeeRegister from './PagesComponents/Admin/EmployeeRegister';

const App: FC = () => {
  const user = true;

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Вернись на сайт :)';
      } else {
        document.title = 'EMS';
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className='app relative'>
      <Routes>
        <Route
          path={ROUTE.HOME}
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path={ROUTE.HOME} element={<HomeNews />} />
          <Route path={ROUTE.ABOUT} element={<AboutUs />} />
          <Route path={ROUTE.GOALS} element={<Goals />} />
          <Route path={ROUTE.ARCHIVE} element={<Archive />} />
          <Route path={ROUTE.TEAM} element={<Team />} />
          <Route path={ROUTE.TEAM_MEMBER} element={<TeamMember />} />
        </Route>
        <Route
          path={ROUTE.LOGIN}
          element={
            <ProtectedRouteLogin user={user}>
              <Login />
            </ProtectedRouteLogin>
          }
        ></Route>
        <Route
          path={ROUTE.ADMINPANEL}
          element={
            <ProtectedRouteAdmin role='admin'>
              <Admin />
            </ProtectedRouteAdmin>
          }
        >
          <Route
            path={ROUTE.ADMIN_EMP_REGISTER}
            element={<EmployeeRegister />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
