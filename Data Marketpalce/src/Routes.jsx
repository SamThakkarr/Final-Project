import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import contact from './component/Contact/Contact';
import Team from './component/Team/Team';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Team" exact component={Team} />
    </Switch>
  );
}

export default Routes;
