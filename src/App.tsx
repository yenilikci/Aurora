import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from '@/auth/providers/AuthProvider';
import CustomThemeProviders from '@/theme/providers/CustomThemeProviders';
import Routes from '@/routes/Routes';
import Loading from '@/components/common/Loading/Loading';

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <AuthProvider>
          <CustomThemeProviders>
            <Routes />
          </CustomThemeProviders>
        </AuthProvider>
      </Router>
    </Suspense>
  );
}
