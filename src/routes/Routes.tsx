import AuthProvider from '@/auth/providers/AuthProvider';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '@/components/common/Loading/Loading';
import React, { useDebugValue } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import paths from './paths';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const Home = React.lazy(() => import('@/pages/Home/Home'));

const CodeEditor = React.lazy(() => import('@/pages/CodeEditor/CodeEditor'));

const Routers = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.codeEditor} element={<ProtectedRoute component={CodeEditor} />} />
    </Routes>
  );
};

export default Routers;
