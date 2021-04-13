import styled from '@emotion/native';

export const TileInfoWrapper = styled.View(({ theme }) => ({
  flexDirection: 'row',
  backgroundColor: theme.color.boardField,
}));

export const Letter = styled.Text<{ isUsed: boolean }>(({ theme, isUsed }) => ({
  width: 12,
  color: isUsed ? theme.color.boardField : theme.color.white,
  marginRight: 10,
  fontWeight: 'bold',
  textTransform: 'uppercase',
}));

export const Amount = styled.Text<{ isUsed: boolean }>(({ theme, isUsed }) => ({
  color: isUsed ? theme.color.boardField : theme.color.white,
  fontSize: theme.font.size.sm,
}));
