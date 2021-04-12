import styled from '@emotion/native';

export const Header = styled.Text(({ theme }) => ({
  color: theme.color.white,
}));

export const ButtonsWrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
});
