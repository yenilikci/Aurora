import React from 'react';
import { Route, Routes } from 'react-router-dom';
import paths from './paths';

const Home = React.lazy(() => import('@/pages/Home/Home'));

const Routers = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
    </Routes>
  );
};

export default Routers;
