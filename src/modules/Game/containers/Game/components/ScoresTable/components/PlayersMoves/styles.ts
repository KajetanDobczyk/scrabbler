import styled from '@emotion/native';

export const PlayersMovesWrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.color.board,
  paddingHorizontal: 2.5,
  paddingBottom: 5,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  '&:last-child': {
    borderRightWidth: 0,
  },
}));
