import('./config/reactotron-config');
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import  Routes  from './routes';
import theme from './config/theme';
import Store, { Persistor } from './store';

const App = ()  => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
