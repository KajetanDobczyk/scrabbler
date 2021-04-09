import styled from '@emotion/native';

import { StatusBarHeight } from 'src/config';

export const HeaderWrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.color.board,
  paddingTop: StatusBarHeight + 20,
  paddingHorizontal: 20,
  paddingBottom: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const Title = styled.Text(({ theme }) => ({
  color: theme.color.white,
  fontWeight: 'bold',
  fontSize: theme.font.size.base,
}));

export const RightMenu = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});
