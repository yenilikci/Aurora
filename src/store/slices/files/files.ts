import { createSlice } from '@reduxjs/toolkit';
import { UserFile } from '@/types/Files';

export interface FilesState {
  userFiles: UserFile[];
  activeFilesIds: string[];
  editorActiveFileId: string | null;
}

export const initialState: FilesState = {
  userFiles: [],
  activeFilesIds: [],
  editorActiveFileId: null,
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {},
});

export const filesReducer = filesSlice.reducer;
