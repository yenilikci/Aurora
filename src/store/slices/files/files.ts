import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    setFiles(state, action: PayloadAction<UserFile[] | any>) {
      state.userFiles = action.payload;
      state.activeFilesIds = [];
    },

    addActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds.push(action.payload);
    },

    removeActiveFile(state, action: PayloadAction<string>) {
      state.activeFilesIds = state.activeFilesIds.filter((fileId) => fileId !== action.payload);
    },

    setEditorActiveFile(state, action: PayloadAction<string | null>) {
      state.editorActiveFileId = action.payload;
    },

    updateFileCode(state, action: PayloadAction<{ fileId: string; newCode: string }>) {
      const { fileId, newCode } = action.payload;
      const { userFiles } = state;
      let userFileToUpdate = userFiles.find((file) => file.id === fileId);
      if (userFileToUpdate) {
        userFileToUpdate.code = newCode;
      }
    },
  },
});

export const { setFiles, addActiveFile, removeActiveFile, setEditorActiveFile, updateFileCode } = filesSlice.actions;

export const filesReducer = filesSlice.reducer;
