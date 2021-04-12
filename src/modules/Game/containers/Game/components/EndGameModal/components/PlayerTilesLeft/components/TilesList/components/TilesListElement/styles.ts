import styled from '@emotion/native';

export const TilesListElementWrapper = styled.TouchableOpacity<{
  noAmountLeft: boolean;
}>(({ noAmountLeft }) => ({
  position: 'relative',
  aspectRatio: 1,
  width: '9.99%',
  padding: 2.5,
  opacity: noAmountLeft ? 0.5 : 1,
}));
