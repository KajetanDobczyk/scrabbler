import styled from '@emotion/native';

export const CommentWrapper = styled.View({
  marginBottom: 20,
});

export const Header = styled.Text({
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const Author = styled.Text(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.color.board,
}));

export const Date = styled.Text(({ theme }) => ({
  fontSize: theme.font.size.sm,
  opacity: 0.4,
}));

export const Content = styled.Text();
