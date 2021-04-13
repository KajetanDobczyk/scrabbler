import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { selectTheme } from 'src/modules/Settings/store/selectors';

const ThemeProvider: React.FC = ({ children }) => {
  const theme = useSelector(selectTheme);

  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
