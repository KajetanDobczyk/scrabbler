import styled from '@emotion/native';

export const IconButtonWrapper = styled.TouchableOpacity<{
  disabled?: boolean;
}>(({ disabled }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  opacity: disabled ? 0.3 : 1,
}));
