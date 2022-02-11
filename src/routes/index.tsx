import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/store';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export function Routes() {
  const { token } = useSelector((state: RootState) => state.user);

  const isLogged = token ? true : false;

  return isLogged ? <AppStack /> : <AuthStack />;
}
