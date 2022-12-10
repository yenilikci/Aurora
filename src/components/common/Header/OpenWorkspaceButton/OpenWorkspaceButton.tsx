import { useAppDispatch } from '@/store/hooks';
import { readFiles } from '@/store/thunks/readFiles/readFiles';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useRef } from 'react';

const OpenWorkspaceStyledButton = styled(Button)(({ theme }) => ({
  color: theme.commonColors.white,
}));

const OpenWorkspaceButton = () => {
  const directoryInputRef = useRef(null);
  const dispatch = useAppDispatch();

  const onClick = () => {
    directoryInputRef.current.click();
  };

  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current.files;
      await dispatch(readFiles(files));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <OpenWorkspaceStyledButton onClick={onClick}>Open Workspace</OpenWorkspaceStyledButton>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={directoryInputRef}
        webkitdirectory="true"
        onChange={onFilesUploaded}
      />
    </div>
  );
};

export default OpenWorkspaceButton;
