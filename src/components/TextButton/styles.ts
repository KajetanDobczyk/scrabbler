import styled from '@emotion/native';

export const TextButtonWrapper = styled.TouchableOpacity<{
  disabled?: boolean;
}>(({ disabled }) => ({
  opacity: disabled ? 0.3 : 1,
}));

export const Label = styled.Text(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: theme.font.size.sm,
  color: theme.color.white,
}));
