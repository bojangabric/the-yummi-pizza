import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './views/Index';
import NotFound from './views/NotFound';
import Checkout from './views/Checkout';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/checkout" component={Checkout} />
    <Route component={NotFound} />
  </Switch>
);

export default Main;
