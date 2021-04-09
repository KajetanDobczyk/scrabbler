import styled from '@emotion/native';

export const FlatButtonWrapper = styled.TouchableOpacity<{
  disabled?: boolean;
}>(({ theme, disabled }) => ({
  backgroundColor: theme.color.boardField,
  borderRadius: 4,
  padding: 10,
  opacity: disabled ? 0.3 : 1,
}));

export const Label = styled.Text(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: theme.font.size.sm,
  color: theme.color.white,
}));
