import styled from '@emotion/native';

export const PlayerMovesWrapper = styled.ScrollView<{ isLastPlayer?: boolean }>(
  ({ theme, isLastPlayer }) => ({
    position: 'relative',
    flexBasis: 0,
    flexGrow: 1,
    backgroundColor: theme.color.white,
    borderRightWidth: isLastPlayer ? 0 : 1,
    paddingHorizontal: 2.5,
    paddingBottom: 5,
  }),
);
