import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./components/Main";
import NotFound from "./components/NotFound";

export default (
    <Switch>
        <Route path="/" component={Main} exact />
        <Route component={NotFound} />
    </Switch>
);