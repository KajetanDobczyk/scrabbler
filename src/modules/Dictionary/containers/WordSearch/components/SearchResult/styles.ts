import styled from '@emotion/native';

export const SearchResultWrapper = styled.ScrollView({
  flex: 1,
  paddingHorizontal: 20,
});

export const Word = styled.Text(({ theme }) => ({
  fontSize: theme.font.size.xl,
  marginBottom: 5,
}));

export const IsAllowedText = styled.Text<{ isAllowed: boolean }>(
  ({ theme, isAllowed }) => ({
    marginBottom: 20,
    color: isAllowed ? theme.color.board : theme.color.trippleWord,
  }),
);

export const Description = styled.Text({
  marginBottom: 20,
});

export const Comments = styled.View(({ theme }) => ({
  paddingTop: 20,
  borderTopColor: theme.color.black,
  borderTopWidth: 1,
}));
