import styled from '@emotion/native';

export const TilesListElementWrapper = styled.TouchableOpacity<{
  noAmountLeft: boolean;
}>(({ noAmountLeft }) => ({
  position: 'relative',
  aspectRatio: 1,
  width: '8.33%',
  padding: 2.5,
  opacity: noAmountLeft ? 0.25 : 1,
}));
