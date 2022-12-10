import { closeFile } from './closeFile';

describe('closeFile', () => {
  let dispatch: any;
  let getState: any;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should close the only active file', () => {
    getState.mockReturnValue({
      files: { activeFilesIds: ['1'], editorActiveFileId: '1' },
    });
    closeFile('1')(dispatch, getState);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: null }]);
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '1' }]);
  });

  describe('when there are 2 or more active files', () => {
    it('should remove the other files if we are not closing the editor active ', () => {
      getState.mockReturnValue({ files: { activeFilesIds: ['1', '2'], editorActiveFileId: '1' } });
      closeFile('2')(dispatch, getState);
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/removeActiveFile', payload: '2' }]);
    });

    it('should remove the editor active file id and set the new editor active file id to be the one on the right', () => {
      getState.mockReturnValue({ files: { activeFilesIds: ['1', '2'], editorActiveFileId: '1' } });
      closeFile('1')(dispatch, getState);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '2' }]);
      expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '1' }]);
    });

    it('should remove the editor active file id and set the new editor active file id to be the one on the left', () => {
      getState.mockReturnValue({ files: { activeFilesIds: ['1', '2'], editorActiveFileId: '2' } });
      closeFile('2')(dispatch, getState);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '1' }]);
      expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/removeActiveFile', payload: '2' }]);
    });
  });
});
