import styled from '@emotion/native';

export const PlayedMoveWrapper = styled.ScrollView<{ height?: number }>(
  ({ theme, height }) => ({
    position: 'relative',
    paddingTop: 5,
    paddingHorizontal: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.boardField,
    height,
  }),
);

export const WordRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const Letters = styled.View({
  flexDirection: 'row',
});

export const Letter = styled.Text<{ isBlank?: boolean }>(
  ({ theme, isBlank }) => ({
    textTransform: 'uppercase',
    fontSize: theme.font.size.xs,
    opacity: isBlank ? 0.3 : 1,
  }),
);

export const Points = styled.Text<{ isBonus?: boolean }>(
  ({ theme, isBonus }) => ({
    fontSize: theme.font.size.xs,
    fontWeight: isBonus ? 'normal' : 'bold',
  }),
);

export const MovePoints = styled.Text<{ skipped?: boolean; loss?: boolean }>(
  ({ theme, skipped, loss }) => ({
    position: 'absolute',
    bottom: -17,
    right: 0,
    fontSize: theme.font.size.xs,
    fontWeight: 'bold',
    color: skipped
      ? theme.color.grayMedium
      : loss
      ? theme.color.trippleWord
      : theme.color.black,
  }),
);
