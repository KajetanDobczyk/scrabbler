import React from 'react';
import { useSelector } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { selectTheme } from 'src/modules/Settings/store/selectors';

EStyleSheet.build();

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useSelector(selectTheme);

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
