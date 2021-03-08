/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import SignIn from './src/containers/SignIn';
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
};

export default App;