import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import GameTabContent from 'src/modules/Game/navigation';
import DictionaryTabContent from 'src/modules/Dictionary/navigation';
import PlayersTabContent from 'src/modules/Players/navigation';
import SettingsTabContent from 'src/modules/Settings/navigation';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import { selectIsUserLoggedIn } from 'src/modules/Players/store/selectors';
import Login from 'src/modules/Players/containers/Login';

import { Screen } from './interfaces';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { t } = useTranslation(['dictionary', 'game', 'settings', 'players']);

  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  if (!isUserLoggedIn) {
    return <Login />;
  }

  const { color } = useSelector(selectTheme);

  const routesNames: Record<Screen, string> = {
    [Screen.Game]: t('game:routeName'),
    [Screen.Dictionary]: t('dictionary:routeName'),
    [Screen.Players]: t('players:routeName'),
    [Screen.Settings]: t('settings:routeName'),
  };

  const getTabBarIcon = (routeName: string, color: string) => {
    switch (routeName) {
      case routesNames[Screen.Game]:
        return <FontAwesome5 name="chess-board" size={15} color={color} />;
      case routesNames[Screen.Dictionary]:
        return <Entypo name="book" size={20} color={color} />;
      case routesNames[Screen.Players]:
        return (
          <MaterialCommunityIcons
            name="account-group"
            size={25}
            color={color}
          />
        );
      case routesNames[Screen.Settings]:
        return <Ionicons name="md-settings" size={20} color={color} />;
      default:
        return null;
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Screen.Players}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        })}
        tabBarOptions={{
          activeBackgroundColor: color.board,
          inactiveBackgroundColor: color.board,
          activeTintColor: color.white,
          inactiveTintColor: color.boardField,
          style: { borderTopColor: color.boardField },
        }}
      >
        <Tab.Screen
          name={routesNames[Screen.Game]}
          component={GameTabContent}
        />
        <Tab.Screen
          name={routesNames[Screen.Dictionary]}
          component={DictionaryTabContent}
        />
        <Tab.Screen
          name={routesNames[Screen.Players]}
          component={PlayersTabContent}
        />
        <Tab.Screen
          name={routesNames[Screen.Settings]}
          component={SettingsTabContent}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
