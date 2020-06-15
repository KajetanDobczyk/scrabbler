import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { PlayerId } from 'src/modules/Players/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  id: PlayerId;
  name: string;
  onChange: (id: PlayerId) => (name: string) => void;
  autoFocus?: boolean;
};

const PlayerName: React.FC<Props> = ({ id, name, onChange, autoFocus }) => {
  const themedStyles = styles(useSelector(selectTheme));

  const normalizedIndex = parseInt(id) + 1;

  return (
    <View style={themedStyles.container}>
      <Text
        style={
          name === ''
            ? themedStyles.index
            : [themedStyles.index, themedStyles.indexHighlighted]
        }
      >
        {normalizedIndex}
      </Text>

      <TextInput
        style={themedStyles.input}
        value={name}
        onChangeText={onChange(id)}
        autoFocus={autoFocus}
        autoCapitalize="sentences"
      />
    </View>
  );
};

export default PlayerName;
