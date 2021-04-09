import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTheme } from 'src/modules/Settings/store/selectors';
import { selectUserData } from 'src/modules/Players/store/selectors';

import { styles } from './styles';

const User = () => {
  const { t } = useTranslation('players');
  const dispatch = useDispatch();

  const themedStyles = styles(useSelector(selectTheme));
  const userData = useSelector(selectUserData);

  return userData ? (
    <View style={themedStyles.container}>
      <Image
        style={themedStyles.profilePic}
        source={{ uri: userData.photoUrl }}
      />
      <Text style={themedStyles.name}>{userData.name}</Text>
    </View>
  ) : null;
};

export default User;
