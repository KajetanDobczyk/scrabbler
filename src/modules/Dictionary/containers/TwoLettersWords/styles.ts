import styled from '@emotion/native';

export const TwoLettersWordsWrapper = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.white,
}));

export const LetterRow = styled.View({
  flexDirection: 'row',
  marginBottom: 10,
});

export const Letter = styled.Text(({ theme }) => ({
  width: 25,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: theme.color.board,
}));

export const LetterWords = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const Word = styled.Text(({ theme }) => ({
  textTransform: 'uppercase',
  marginRight: 10,
  marginBottom: 2,
}));
