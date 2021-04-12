import styled from '@emotion/native';

export const PlayersNamesWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: theme.color.board,
}));

export const Name = styled.Text<{ isCurrent: boolean }>(
  ({ theme, isCurrent }) => ({
    flexGrow: 1,
    textAlign: 'center',
    fontSize: theme.font.size.xs,
    paddingBottom: 5,
    color: isCurrent ? theme.color.white : theme.color.boardField,
  }),
);
