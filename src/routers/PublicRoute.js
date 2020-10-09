import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				!isAuth ? <Component {...props} /> : <Redirect to='/' />
			}
		/>
	);
};

PublicRoute.prototype = {
	isAuth: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
