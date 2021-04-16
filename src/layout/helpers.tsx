import React from 'react';
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { Screen } from './interfaces';
import { routesNames } from './helperData';

export const getTabBarIcon = (routeName: string, color: string) => {
  switch (routeName) {
    case routesNames[Screen.Game]:
      return <FontAwesome5 name="chess-board" size={15} color={color} />;
    case routesNames[Screen.Dictionary]:
      return <Entypo name="book" size={20} color={color} />;
    case routesNames[Screen.Players]:
      return (
        <MaterialCommunityIcons name="account-group" size={25} color={color} />
      );
    case routesNames[Screen.Settings]:
      return <Ionicons name="md-settings" size={20} color={color} />;
    default:
      return null;
  }
};
