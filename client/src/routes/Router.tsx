import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navbar from '../components/Navbar';
import FileUpload from '../components/FileUpload';
import ImagePage from '../components/ImagePage';

const history = createBrowserHistory();

function Router() {
  return (
    <BrowserRouter history={history}>
      <Navbar />
      <Switch>
        <Route path="/" component={FileUpload} exact />
        <Route path="/:handle" component={ImagePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;