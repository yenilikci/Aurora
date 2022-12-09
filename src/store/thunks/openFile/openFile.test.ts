import { openFile } from './openFile';

describe('openFile', () => {
  let dispatch: any;
  let getState: any;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('should not open a node if it has children', () => {
    const node: any = { id: '1', children: [{ id: '2' }] };
    openFile(node)(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
    expect(getState).not.toHaveBeenCalled();
  });

  it('should open the node if it is not already opened', () => {
    getState.mockReturnValue({ files: { activeFilesIds: [] } });
    const node: any = { id: '1' };
    openFile(node)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/addActiveFile', payload: '1' }]);
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/setEditorActiveFile', payload: '1' }]);
  });

  it('should open the node if it is already opened', () => {
    getState.mockReturnValue({ files: { activeFilesIds: ['1'] } });
    const node: any = { id: '1' };
    openFile(node)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '1' }]);
  });
});
