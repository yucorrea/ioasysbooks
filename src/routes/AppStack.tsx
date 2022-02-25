import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home  from '@screens/Home';
import BookDetail  from '@screens/BookDetail';

export interface Book {
  id: string;
  imageUrl: string;
  title: string;
  pageCount: number;
  publisher: string;
  published: number;
  isbn10: string;
  isbn13: string;
  category: string;
  authors: Array<string>;
  language: string;
  description: string;
}

export type AppStackParamList = {
  Home: undefined;
  BookDetail: { book: Book };
};

export type HomeNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

export type BookDetailNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'BookDetail'
>;

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
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

export default AppStack;
