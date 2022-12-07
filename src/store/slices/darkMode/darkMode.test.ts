import darkModeReducer, { toggleDarkMode } from './darkMode';

describe('dark mode reducer', () => {

  it('should enable the dark mode if it is disabled', () => {
    expect(darkModeReducer(false, toggleDarkMode)).toEqual(true);
  });

  it('should disabled the dark mode if it is enabled', () => {
    expect(darkModeReducer(true, toggleDarkMode)).toEqual(false);
  });

});
