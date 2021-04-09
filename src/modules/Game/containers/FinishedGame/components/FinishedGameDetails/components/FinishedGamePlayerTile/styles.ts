import styled from '@emotion/native';

import { hexToRGBA } from 'src/theme';

export const FinishedGamePlayerTileWrapper = styled.View<{ isWinner: boolean }>(
  ({ theme, isWinner }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    backgroundColor: hexToRGBA(theme.color.white, isWinner ? 0.3 : 0.1),
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  }),
);

export const Name = styled.Text(({ theme }) => ({
  color: theme.color.white,
}));

export const Points = styled.Text(({ theme }) => ({
  color: theme.color.white,
  fontWeight: 'bold',
}));
