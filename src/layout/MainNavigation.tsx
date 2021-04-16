import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import GameTabContent from 'src/modules/Game/navigation';
import DictionaryTabContent from 'src/modules/Dictionary/navigation';
import PlayersTabContent from 'src/modules/Players/navigation';
import SettingsTabContent from 'src/modules/Settings/navigation';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import { selectIsUserLoggedIn } from 'src/modules/User/store/selectors';
import Login from 'src/modules/Players/containers/Login';

import { Screen } from './interfaces';
import { getTabBarIcon } from './helpers';
import { routesNames } from './helperData';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const { color } = useSelector(selectTheme);

  if (!isUserLoggedIn) {
    return <Login />;
  }

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
