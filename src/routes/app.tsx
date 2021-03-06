import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { BookDetail } from '../screens/BookDetail';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="BookDetail"
        component={BookDetail}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
