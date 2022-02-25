import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store/store';
import  AppStack  from '@routes/AppStack';
import  AuthStack  from '@routes/AuthStack';

const  Routes = ()  => {
  const { token } = useSelector((state: RootState) => state.user);

  const isLogged = token ? true : false;

  return isLogged ? <AppStack /> : <AuthStack />;
}

export default Routes;
