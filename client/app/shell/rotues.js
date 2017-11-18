import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Generate from './generate';
import Profile from './profile';

export default () => (
  <Switch>
    <Route exact path='/' component={Generate} />
    <Route path='/profile' component={Profile} />
  </Switch>
);
