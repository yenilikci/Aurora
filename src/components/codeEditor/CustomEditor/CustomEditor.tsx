import React, { useState, useCallback } from 'react';
import { debounce, set } from 'lodash';
import Editor from '@monaco-editor/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateFileCode } from '@/store/slices/files/files';
import { UserFile } from '@/types/Files';
import Loading from '@/components/common/Loading/Loading';

type CustomEditorProps = {
  activeFile: UserFile
}

const supportedExtension: { [key: string]: string } = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  go: 'go',
  php: 'php',
  java: 'java',
  rb: 'ruby',
  html: 'html',
  css: 'css',
  json: 'json',
  svg: 'svg',
  png: 'png',
  ico: 'ico'
};

const CustomEditor = (props: CustomEditorProps) => {
  const { activeFile: { id, extension, code: originalCode } } = props;

  const [code, setCode] = useState(originalCode);

  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const language = supportedExtension[extension];

  const debouncedSave = useCallback(debounce((fileId: string, newCode: string) => {
    dispatch(updateFileCode({ fileId, newCode }));
  }, 1000), []);

  const onChange = (newCode = '') => {
    setCode(newCode);
    debouncedSave(id, newCode);
  };

  return (
    <Editor
      width='100%'
      height='100%'
      language={language}
      theme={darkMode ? 'vs-dark' : 'light'}
      value={code}
      loading={<Loading />}
      onChange={onChange}
    />
  );
};

export default CustomEditor;