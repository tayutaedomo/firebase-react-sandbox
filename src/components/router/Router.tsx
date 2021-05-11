import React, { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../layout/DefaultLayout';
import Home from '../home/Home';
import Page404 from '../Page404';
import Functions from '../functions/Functions';

const Router: VFC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route exact path="/functions">
          <DefaultLayout>
            <Functions />
          </DefaultLayout>
        </Route>
        <Route exact path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
