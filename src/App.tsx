import React, { useEffect } from 'react';
import config from './config/index';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from '@/auth/providers/AuthProvider';
import CustomThemeProviders from '@/theme/providers/CustomThemeProviders';
import Routes from '@/routes/Routes';

export default function App() {
  useEffect(() => {
    console.log(config);
  }, []);

  return (
    <Router>
      <AuthProvider>
        <CustomThemeProviders>
          <Routes />
        </CustomThemeProviders>
      </AuthProvider>
    </Router>
  );
}
