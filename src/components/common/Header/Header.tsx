import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import paths from 'routes/paths';
import CodeEditorButton from './CodeEditorButton/CodeEditorButton';
import SignInButton from './SignInButton/SignInButton';
import SignOutButton from './SignOutButton/SignOutButton';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.commonColors.white,
}));

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1 }}>
          <StyledLink to={paths.home}>Code Editor App</StyledLink>
        </Typography>
        {isAuthenticated ? <AuthenticatedButtons /> : <UnauthenticatedButtons />}
      </Toolbar>
    </AppBar>
  );
};

const UnauthenticatedButtons = () => {
  return (
    <div>
      <SignInButton />
    </div>
  );
};

const AuthenticatedButtons = () => {
  return (
    <div>
      <CodeEditorButton />
      <SignOutButton />
    </div>
  );
};

export default Header;
