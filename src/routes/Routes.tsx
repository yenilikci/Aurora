import { Route, Routes } from 'react-router-dom';
import paths from './paths';

const Test = () => <div>hi!</div>;

const Routers = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Test />} />
      <Route path={paths.codeEditor} element={<Test />} />
    </Routes>
  );
};

export default Routers;
