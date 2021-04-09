import styled from '@emotion/native';
import { Image } from 'react-native';

export const LogoWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 15,
});

export const LogoImage = styled<any>(Image)({
  marginVertical: 10,
  marginRight: 10,
  width: 25,
  height: 25,
});

export const Title = styled.Text(({ theme }) => ({
  color: theme.color.white,
  fontSize: theme.font.size.xl,
}));
