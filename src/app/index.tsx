import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { DealList, DealData } from './components';
import { LoginPage } from './components/Login/LoginPage';
const PrivateRoute = (props: any) => {
  const storedText: any = localStorage.getItem('@auth');
  const token: any = JSON.parse(storedText);
  return token ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/'
      }}
    />
  );
};

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <PrivateRoute path="/deals" component={DealList} />
    <PrivateRoute path="/:id" component={DealData} />
  </Switch>
));
