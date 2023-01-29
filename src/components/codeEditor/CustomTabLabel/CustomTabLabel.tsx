import { MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import { UserFile } from '@/types/Files';
import ExtensionIcon from '@/components/codeEditor/ExtensionIcon/ExtensionIcon';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '@/store/hooks';
import { closeFile } from '@/store/thunks/closeFile/closeFile';

type CustomTabLabelProps = {
  activeFile: UserFile
}

const CustomTabLabel = (props: CustomTabLabelProps) => {
  const dispatch = useAppDispatch();
  const { activeFile: { id, name, extension } } = props;

  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(id));
  };


  return (
    <CustomTabLabelContainer>
      <ExtensionIcon extension={extension} />
      <FileName>
        {name}
      </FileName>
      <CloseIcon
        onClick={onClose}
        sx={{ position: 'absolute', fontSize: '12px', right: 0, color: (theme) => theme.font }}
      />
    </CustomTabLabelContainer>
  );
};

const CustomTabLabelContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none'
});

const FileName = styled('div')(({ theme }) => ({
  padding: '0px 8px',
  color: theme.font
}));

export default CustomTabLabel;
