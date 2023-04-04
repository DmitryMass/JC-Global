import { FC } from 'react';
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

const App: FC = () => {
  const user = true;

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
