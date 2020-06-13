import React from 'react';
import { View, Switch, Text } from 'react-native';

import { color } from 'src/theme';

import { styles } from './styles';

type Props = {
  label: string;
  value: boolean;
  onChange: () => void;
};

const SettingRow: React.FC<Props> = ({ label, value, onChange }) => (
  <View style={styles.container}>
    <Text>{label}</Text>
    <Switch
      trackColor={{ false: color.gray.light, true: color.lightBlue }}
      thumbColor={value ? color.blue : color.gray.medium}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onChange}
      value={value}
    />
  </View>
);

export default SettingRow;
