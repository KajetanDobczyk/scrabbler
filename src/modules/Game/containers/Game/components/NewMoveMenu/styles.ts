import styled from '@emotion/native';

export const NewMoveMenuWrapper = styled.View(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'space-between',
  backgroundColor: theme.color.board,
  paddingTop: 2.5,
  paddingHorizontal: 5,
  paddingBottom: 5,
}));

export const ButtonsWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingTop: 5,
  paddingHorizontal: 2.5,
  paddingBottom: 2.5,
});

export const LeftButtonWrapper = styled.View({
  marginRight: 5,
});
