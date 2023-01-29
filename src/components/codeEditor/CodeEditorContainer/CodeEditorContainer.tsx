import { AppBar, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setEditorActiveFile } from '@/store/slices/files/files';
import selectActiveFiles from '@/store/selectors/selectActiveFiles/selectActiveFiles';
import CustomTabPanel from '@/components/codeEditor/CustomTabPanel/CustomTabPanel';
import CustomTabLabel from '@/components/codeEditor/CustomTabLabel/CustomTabLabel';
import { ChangeEvent } from 'react';

const CodeEditorContainer = () => {
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFileId = useAppSelector((state) => state.files.editorActiveFileId);

  const onTabClick = (event: ChangeEvent<{}>, tabPosition: number) => {
    const activeFile = activeFiles[tabPosition];
    if (activeFile.id !== editorActiveFileId) {
      dispatch(setEditorActiveFile(activeFile.id));
    }
  };

  const tabValue = editorActiveFileId
    ? activeFiles.findIndex((activeFile) => activeFile.id === editorActiveFileId)
    : 0;

  if (!activeFiles.length) {
    return <EmptyMessage>Select a file</EmptyMessage>;
  }

  return (
    <CodeEditorContainerDiv>
      <AppBar position='static' color='default'>
        <Tabs
          textColor='primary'
          indicatorColor='primary'
          variant='scrollable'
          value={tabValue}
          onChange={onTabClick}
        >
          {activeFiles.map(activeFile => {
            const { id } = activeFile;
            return <Tab key={id} label={<CustomTabLabel activeFile={activeFile} />} />;
          })
          }
        </Tabs>
      </AppBar>
      {activeFiles.map(activeFile => {
        const { id } = activeFile;
        return <CustomTabPanel key={id} activeFile={activeFile} editorActiveFileId={editorActiveFileId} />;
      })}
    </CodeEditorContainerDiv>
  );
};

const CodeEditorContainerDiv = styled('div')({
  flex: 1,
  height: '100%'
});

const EmptyMessage = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.font
}));

export default CodeEditorContainer;