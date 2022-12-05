import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/Loading/Loading';

type ProtectedRouteProps = {
  component: FC;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => (
  <Route {...args}>
    {withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
  </Route>
);

export default ProtectedRoute;