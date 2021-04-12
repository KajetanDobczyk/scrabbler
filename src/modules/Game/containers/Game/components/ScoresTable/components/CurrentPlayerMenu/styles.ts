import styled from '@emotion/native';

export const CurrentPlayerMenuWrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.color.board,
  paddingHorizontal: 2.5,
  paddingBottom: 5,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const ButtonWrapper = styled.View({
  flexGrow: 1,
  flexDirection: 'column',
  paddingHorizontal: 2.5,
});
