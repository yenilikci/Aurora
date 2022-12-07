import React, { ComponentType } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default ProtectedRoute;
