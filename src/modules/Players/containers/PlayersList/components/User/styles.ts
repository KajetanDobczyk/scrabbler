import styled from '@emotion/native';
import { Image } from 'react-native';

import { font } from 'src/theme/variables';

export const UserWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: theme.color.board,
}));

export const ProfilePic = styled<any>(Image)({
  width: 60,
  height: 60,
  borderRadius: 4,
});

export const Name = styled.Text(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.color.board,
  marginLeft: 10,
  fontSize: font.size.md,
}));
