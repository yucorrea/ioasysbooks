import React from 'react';

import { AppRoutes } from './app';
import { AuthRoutes } from './auth';

export function Routes() {
  const isLogged = false;

  return isLogged ? <AppRoutes /> : <AuthRoutes />;
}
