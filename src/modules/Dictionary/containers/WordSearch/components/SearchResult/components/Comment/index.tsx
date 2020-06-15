import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';
import { IComment } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  comment: IComment;
};

const Comment: React.FC<Props> = ({ comment }) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.header}>
        <Text style={themedStyles.author}>{comment.author}</Text>
        <Text style={themedStyles.date}>{comment.date}</Text>
      </View>
      <Text style={themedStyles.content}>{comment.content}</Text>
    </View>
  );
};

export default Comment;
