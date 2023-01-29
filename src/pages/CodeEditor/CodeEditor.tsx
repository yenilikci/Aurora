import Layout from '@/layout/Layout';
import { styled } from '@mui/material/styles';
import FileViewer from '@/components/codeEditor/FileViewer/FileViewer';
import CodeEditorContainer from '@/components/codeEditor/CodeEditorContainer/CodeEditorContainer';

const CodeEditorDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'hidden',
  backgroundColor: theme.background
}));

const FileViewerContainer = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '300px',
  overflowX: 'hidden',
  overflowY: 'scroll',
  padding: '50px 0 0 0'
});

const CodeEditorContainerDiv = styled('div')({
  display: 'flex',
  flex: 1,
  height: '100%'
});

const CodeEditor = () => {
  return <Layout>
    <CodeEditorDiv>
      <FileViewerContainer className='custom-scroll'>
        <FileViewer />
      </FileViewerContainer>
      <CodeEditorContainerDiv>
        <CodeEditorContainer />
      </CodeEditorContainerDiv>
    </CodeEditorDiv>
  </Layout>;
};

export default CodeEditor;
