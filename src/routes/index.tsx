import React from 'react';
import { useSelector } from 'react-redux';

import { AppRoutes } from './app';
import { AuthRoutes } from './auth';

export function Routes() {
  const { token } = useSelector(state => state.auth);

  const isLogged = token ? true : false;

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}
