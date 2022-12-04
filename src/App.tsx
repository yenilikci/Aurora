import React, { useEffect } from 'react';
import config from './config/index';

export default function App() {
  useEffect(() => {
    console.log(config);
  }, []);

  return <div>App</div>;
}
