import styled from '@emotion/native';

export const ModalContent = styled.View(({ theme }) => ({
  backgroundColor: theme.color.board,
  padding: 20,
  borderRadius: 4,
}));

export const Header = styled.Text(({ theme }) => ({
  color: theme.color.white,
  marginBottom: 20,
}));

export const TilesList = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
});

export const TileWrapper = styled.TouchableOpacity({
  width: 25,
  marginRight: 8,
  marginBottom: 8,
});
