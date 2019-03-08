import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import Basket from "./components/Basket";
import UserForm from "./components/UserForm";
import OrderSummary from "./components/OrderSummary";

export default (
    <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/basket" component={Basket} />
        <Route path="/userForm" component={UserForm} />
        <Route path="/orderSummary" component={OrderSummary} />
        <Route component={NotFound} />
    </Switch>
);