import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { AppRoutes } from './app';
import { AuthRoutes } from './auth';

export function Routes() {
  const { token } = useSelector((state: RootState) => state.user);

  const isLogged = token ? true : false;

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}
