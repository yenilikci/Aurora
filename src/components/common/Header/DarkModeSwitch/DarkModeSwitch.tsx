import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/Brightness2';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { RootState } from '@/types/Store';
import { toggleDarkMode } from '@/store/slices/darkMode/darkMode';

const DarkModeSwitch = () => {
  const isDarkModeEnabled = useAppSelector((state: RootState) => state.darkMode);

  const dispatch = useAppDispatch();

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <DarkModeIcon />
      <Switch color="default" checked={isDarkModeEnabled} onChange={onChangeDarkMode} />
    </>
  );
};

export default DarkModeSwitch;
