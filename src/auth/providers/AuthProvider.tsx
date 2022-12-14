import { PropsWithChildren } from 'react';
import { Auth0Provider, AppState } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';
import config from '@/config';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider
      onRedirectCallback={onRedirectCallback}
      domain={config.auth0Domain}
      clientId={config.auth0ClientId}
      redirectUri={window.location.origin}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
