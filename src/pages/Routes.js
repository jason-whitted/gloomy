import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as Page from './pages';

export default () => (
  <Switch>
    <Route exact path="/" component={Page.Home} />
    <Route exact path="/auth/callback" component={Page.AuthCallback} />
    <Route exact path="/campaign/:campaignID" component={Page.Campaign} />
    <Route exact path="/campaign/:campaignID/character/:characterID" component={Page.Character} />
    <Route exact path="/campaign/:campaignID/party/:partyID" component={Page.Party} />
    <Route exact path="/campaign/:campaignID/player/:playerID" component={Page.Player} />
    <Route component={Page.NotFound} />
  </Switch>
);
