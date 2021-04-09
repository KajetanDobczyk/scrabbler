import styled from '@emotion/native';

import { hexToRGBA } from 'src/theme';

export const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: hexToRGBA(theme.color.boardField, 0.2),
  padding: 10,
}));

export const SettingsRow = styled.View(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.color.white,
  borderRadius: 5,
  marginBottom: 10,
}));

export const Label = styled.Text();
