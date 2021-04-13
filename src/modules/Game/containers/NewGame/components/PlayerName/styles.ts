import styled from '@emotion/native';

export const PlayerNameWrapper = styled.View({
  width: 200,
  height: 30,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
});

export const Index = styled.Text<{ isHighlighted?: boolean }>(
  ({ theme, isHighlighted }) => ({
    color: isHighlighted ? theme.color.white : theme.color.boardField,
    marginRight: 10,
  }),
);

export const Input = styled.TextInput(({ theme }) => ({
  flex: 1,
  color: theme.color.white,
  borderBottomColor: theme.color.boardField,
  borderBottomWidth: 1,
}));
