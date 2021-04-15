import styled from '@emotion/native';

export const PlayerMovesWrapper = styled.View<{ isLastPlayer?: boolean }>(
  ({ theme, isLastPlayer }) => ({
    backgroundColor: theme.color.white,
    paddingHorizontal: 2.5,
    paddingBottom: 5,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRightWidth: isLastPlayer ? 0 : 1,
  }),
);
