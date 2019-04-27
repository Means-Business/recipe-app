import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Recipe from './components/Recipe';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}
