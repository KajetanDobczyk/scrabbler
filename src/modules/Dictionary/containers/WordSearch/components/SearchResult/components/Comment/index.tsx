import React from 'react';
import { View, Text } from 'react-native';

import { IComment } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';

type Props = {
  comment: IComment;
};

const Comment: React.FC<Props> = ({ comment }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.author}>{comment.author}</Text>
      <Text style={styles.date}>{comment.date}</Text>
    </View>
    <Text style={styles.content}>{comment.content}</Text>
  </View>
);

export default Comment;
