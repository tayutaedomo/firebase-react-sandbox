import React, { useEffect, VFC } from 'react';

import { signInAnonymously } from '../utils/firebase';

import Router from './router/Router';

const App: VFC = () => {
  useEffect(() => {
    signInAnonymously();
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
