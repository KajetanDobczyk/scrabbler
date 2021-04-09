import styled from '@emotion/native';

export const BoardWrapper = styled.View(({ theme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: 1,
  zIndex: 0,
  backgroundColor: theme.color.board,
  paddingHorizontal: 5,
  paddingBottom: 5,
}));

export const Row = styled.View({
  flexGrow: 1,
  flexDirection: 'row',
  alignItems: 'stretch',
});
