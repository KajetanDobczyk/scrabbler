import styled from '@emotion/native';
import * as Animatable from 'react-native-animatable';

export const TileWrapper = styled.View(({ theme }) => ({
  aspectRatio: 1,
  position: 'relative',
  backgroundColor: theme.color.tile,
  borderRadius: 2,
}));

export const HighlightOverlay = styled(Animatable.View)(({ theme }) => ({
  backgroundColor: theme.color.white,
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 0,
  borderRadius: 2,
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
  opacity: isBlank ? 0.3 : 1,
}));

export const Points = styled.Text(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 2,
  fontSize: theme.font.size.xxs,
}));
