import styled from '@emotion/native';

export const PlayerTilesLeftWrapper = styled.View(({ theme }) => ({
  position: 'relative',
  marginTop: 10,
  borderWidth: 1,
  borderColor: theme.color.boardField,
  borderRadius: 4,
}));

export const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: 10,
  paddingHorizontal: 10,
});

export const Name = styled.Text(({ theme }) => ({
  color: theme.color.white,
  marginBottom: 10,
}));

export const TilesLeft = styled.View({
  flexDirection: 'row',
});

export const TilePlaceholder = styled.View(({ theme }) => ({
  width: 20,
  aspectRatio: 1,
  backgroundColor: theme.color.white,
  opacity: 0.1,
  marginLeft: 5,
}));

export const TileLeftWrapper = styled.TouchableOpacity({
  width: 20,
  marginLeft: 5,
});

export const MinusPointsWrapper = styled.View(({ theme }) => ({
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 30,
  borderRadius: 20,
  bottom: -5,
  right: -5,
  backgroundColor: theme.color.boardField,
}));

export const MinusPoints = styled.Text(({ theme }) => ({
  textAlign: 'center',
  color: theme.color.white,
}));
