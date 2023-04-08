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
  ProtectedRouteLogin,
} from '@/utils/PROTECTED_ROUTES/protected_routes';
//
import './App.scss';
import Archive from '@/pages/Archive/Archive';

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
        </Route>
        <Route
          path={ROUTE.LOGIN}
          element={
            <ProtectedRouteLogin user={user}>
              <Login />
            </ProtectedRouteLogin>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
