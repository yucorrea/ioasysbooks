import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';

export type AuthStackParamList = {
  SignIn: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator>
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
