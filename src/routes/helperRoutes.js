import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// TODO: Update when authentication service is available
/**
 * Create a public route
 * @param {component, options} param
 */
export const PrivateRoute = ({component, ...options}) => {
    const isAuth = true;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/login"/>
}

/**
 * Create a public route
 * @param {component, options} param
 */
export const PublicRoute = ({component, ...options}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component={component}/>
    return <Redirect to="/"/>
}