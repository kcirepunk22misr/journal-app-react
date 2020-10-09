import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
	localStorage.setItem('lastPath', rest.location.pathname);

	return (
		<Route
			{...rest}
			component={(props) =>
				isAuth ? <Component {...props} /> : <Redirect to='/auth/login' />
			}
		/>
	);
};

PrivateRoute.prototype = {
	isAuth: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
