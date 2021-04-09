import styled from '@emotion/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const GameWrapper = styled.View(({ theme }) => ({
  backgroundColor: theme.color.board,
}));

export const HorizontalScreen = styled.View({
  flex: 1,
  width: screenWidth,
});
