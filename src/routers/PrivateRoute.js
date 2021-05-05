import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({
    IsAunthenticated,
    component: Component,
    ...rest
}) => {
    //Si esta auntenticado nos deja pasar, si no no
    console.log(IsAunthenticated);
    return (
        <Route {...rest}
        component= {(props) =>(
            (IsAunthenticated) ? (<Component {...props}/>) 
                                : (<Redirect to="/auth/login"/>)
        )}
        />
    )
}


PrivateRoute.propTypes = {
    IsAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}