import styled from '@emotion/native';

export const PlayersTotalScoresWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: theme.color.boardField,
}));

export const PointsWrapper = styled.View(({ theme }) => ({
  flexBasis: 0,
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 5,
  backgroundColor: theme.color.board,
}));

export const Points = styled.Text<{ isCurrentPlayer?: boolean }>(
  ({ theme, isCurrentPlayer }) => ({
    fontWeight: 'bold',
    color: isCurrentPlayer ? theme.color.white : theme.color.boardField,
  }),
);
