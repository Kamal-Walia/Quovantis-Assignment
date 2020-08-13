import React from 'react';
import {StatusBar} from 'react-native';
import AppContainer from './src/navigation/RootNavigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

export default App;
