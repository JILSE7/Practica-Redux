import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    IsAunthenticated,
    component: Component,
    ...rest
}) => {
    
    return (
        <Route {...rest}
        component= {(props) =>(
            (IsAunthenticated) ? (<Redirect to="/"/>) : (<Component {...props}/>) 
        )}
        />
    )
}


PublicRoute.propTypes = {
    IsAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}