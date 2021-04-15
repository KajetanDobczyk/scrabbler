import styled from '@emotion/native';

export const NewGameWrapper = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.color.board,
}));

export const Header = styled.Text(({ theme }) => ({
  color: theme.color.white,
  marginBottom: 20,
}));
