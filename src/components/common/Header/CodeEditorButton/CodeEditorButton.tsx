import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import paths from 'routes/paths';

const CodeEditorSyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const CodeEditorButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(paths.codeEditor);
  };

  return <CodeEditorSyledButton onClick={onClick}>Code Editor</CodeEditorSyledButton>;
};

export default CodeEditorButton;
