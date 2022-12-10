import { readFiles } from './readFiles';
import { readFile } from '../../../utils/readFile';

jest.mock('../../../utils/readFile');
const mockRead = jest.fn();

describe('readFiles', () => {
  let dispatch: any;
  let getState: any;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  it('shoud read two files', async () => {
    const userFiles = [
      {
        id: '1',
        name: 'index.js',
        code: 'console.log("hello world")',
        extension: 'js',
        relativePath: 'src/index.js',
      },
      {
        id: '2',
        name: 'main.js',
        code: 'console.log("hello world")',
        extension: 'js',
        relativePath: 'src/main.js',
      },
    ];

    mockRead.mockReturnValueOnce(userFiles[0]);
    mockRead.mockReturnValueOnce(userFiles[1]);
    await readFiles([1, 2])(dispatch, getState, {});
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch.mock.calls[0][0].type).toEqual('files/readFiles/pending');
    // expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/setFiles', payload: userFiles }]);
    expect(dispatch.mock.calls[2][0].type).toEqual('files/readFiles/fulfilled');
  });
});
