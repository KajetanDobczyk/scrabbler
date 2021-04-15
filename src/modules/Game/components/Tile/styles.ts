import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const TileWrapper = styled(Animated.View)(({ theme }) => ({
  aspectRatio: 1,
  position: 'relative',
  backgroundColor: theme.color.tile,
  borderRadius: 2,
}));

export const HighlightOverlay = styled<any>(Animated.View)(({ theme }) => ({
  backgroundColor: theme.color.white,
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 0,
}));

export const Content = styled.View({
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  zIndex: 1,
});

export const Letter = styled.Text<{ isBlank: boolean }>(({ isBlank }) => ({
  textTransform: 'uppercase',
  opacity: isBlank ? 0.3 : 0.5,
}));

export const Points = styled.Text(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 2,
  fontSize: theme.font.size.xxs,
}));
