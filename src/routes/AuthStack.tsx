import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';

export type AuthStackParamList = {
  SignIn: undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
 AuthStackParamList,
 'SignIn'
>;

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
