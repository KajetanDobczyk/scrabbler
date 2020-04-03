import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigation from 'src/layout/Navigation';
import store from 'src/redux/store';

EStyleSheet.build();

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
