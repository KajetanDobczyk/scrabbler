import React from 'react';
import { View, Switch, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';

type Props = {
  label: string;
  value: boolean;
  onChange: () => void;
};

const Toggle: React.FC<Props> = ({ label, value, onChange }) => {
  const { color } = useSelector(selectTheme);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: color.grayLight, true: color.doubleLetter }}
        thumbColor={value ? color.trippleLetter : color.grayMedium}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
      />
    </View>
  );
};

export default Toggle;
