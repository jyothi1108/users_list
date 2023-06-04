/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Navigator from './src/navigation/Root'

const App: () => Node = () => {
  return (
    <Navigator />
  );
};

export default App;
