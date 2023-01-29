import { styled } from '@mui/material/styles';
import { UserFile } from '@/types/Files.js';
import CustomEditor from '@/components/codeEditor/CustomEditor/CustomEditor.js';
import { editor } from 'monaco-editor';

type CustomTabPanelProps = {
  activeFile: UserFile;
  editorActiveFileId: string | null;
}


const CustomTabPanel = (props: CustomTabPanelProps) => {
  const { activeFile, editorActiveFileId } = props;

  return (
    <CustomTabPanelContainer role='tabpanel' hidden={editorActiveFileId !== activeFile.id}>
      <CustomEditor activeFile={activeFile} />
    </CustomTabPanelContainer>
  );
};

const CustomTabPanelContainer = styled('div')({
  height: '100%'
});

export default CustomTabPanel;