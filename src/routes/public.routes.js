import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { PublicRoute } from './helperRoutes';
import HomeView from '../views/HoveView';
import SaludoView from '../views/SaludoView';

const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={HomeView}/>
            <PublicRoute exact path="/saludo" component={SaludoView}/>
            <Redirect path="/**" to="/" />
        </Switch>
    )
}

export default PublicRoutes;