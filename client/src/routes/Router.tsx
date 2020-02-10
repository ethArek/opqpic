import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navbar from '../components/Navbar';
import FileUpload from '../components/FileUpload';
import ImagePage from '../components/ImagePage';
import ThemeSwitcher from '../components/ThemeSwitcher';

const history = createBrowserHistory();

function Router() {
  return (
    <BrowserRouter history={history}>
      <Navbar />
      <ThemeSwitcher />
      <Switch>
        <Route path="/share/:handle" component={ImagePage} />
        <Route path="/" component={FileUpload} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
