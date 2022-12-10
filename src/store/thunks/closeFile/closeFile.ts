import { removeActiveFile, setEditorActiveFile } from '../../slices/files/files';
import { AppDispatch, RootState } from '@/types/Store';

export const closeFile = (fileToCloseId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
  const {
    files: { activeFilesIds, editorActiveFileId },
  } = getState();
  const activeFilesLength = activeFilesIds.length;

  if (activeFilesLength === 1) {
    dispatch(setEditorActiveFile(null));
  } else if (activeFilesLength >= 2 && fileToCloseId === editorActiveFileId) {
    const newActiveFileId = getNewActiveFileId(activeFilesIds, activeFilesLength, fileToCloseId);

    dispatch(setEditorActiveFile(newActiveFileId));
  }

  dispatch(removeActiveFile(fileToCloseId));
};

const getNewActiveFileId = (activeFileIds: string[], activeFilesLength: number, fileToCloseId: string) => {
  const fileToBeRemovedIndex = activeFileIds.indexOf(fileToCloseId);

  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFileIds[fileToBeRemovedIndex - 1];
  }

  return activeFileIds[fileToBeRemovedIndex + 1];
};
