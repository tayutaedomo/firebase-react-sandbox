import React, { VFC } from 'react';

import DefaultLayout from './layout/DefaultLayout';
import Home from './home/Home';

const App: VFC = () => {
  return (
    <>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  );
};

export default App;
