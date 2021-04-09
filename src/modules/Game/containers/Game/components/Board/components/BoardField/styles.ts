import styled from '@emotion/native';
import { Animated } from 'react-native';

export const BoardFieldWrapper = styled.TouchableOpacity(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  flexBasis: 0,
  borderColor: theme.color.board,
  borderWidth: 1,
}));

export const HighlightOverlay = styled(Animated.View)(({ theme }) => ({
  backgroundColor: theme.color.white,
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 0,
}));

export const TileWrapper = styled.View({
  position: 'absolute',
  width: '100%',
  height: '100%',
  padding: 2,
  zIndex: 1,
});
