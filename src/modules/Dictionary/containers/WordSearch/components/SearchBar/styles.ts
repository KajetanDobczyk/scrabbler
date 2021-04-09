import styled from '@emotion/native';

export const SearchBarWrapper = styled.View({
  flexDirection: 'row',
  width: '100%',
  padding: 20,
});

export const TextInput = styled.TextInput(({ theme }) => ({
  flex: 1,
  borderBottomWidth: 1,
  borderBottomColor: theme.color.black,
  marginRight: 10,
}));
