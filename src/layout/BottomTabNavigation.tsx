import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

import GameTabContent from 'src/modules/Game/navigation';
import DictionaryTabContent from 'src/modules/Dictionary/navigation';
import SettingsTabContent from 'src/modules/Settings/navigation';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { Screen } from './interfaces';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const { color } = useSelector(selectTheme);

  const getTabBarIcon = (routeName: string, color: string) => {
    switch (routeName) {
      case Screen.Game:
        return <FontAwesome5 name="chess-board" size={15} color={color} />;
      case Screen.Dictionary:
        return <Entypo name="book" size={20} color={color} />;
      case Screen.Settings:
        return <Ionicons name="md-settings" size={20} color={color} />;
      default:
        return null;
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Screen.Game}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        })}
        tabBarOptions={{
          activeBackgroundColor: color.green,
          inactiveBackgroundColor: color.green,
          activeTintColor: color.white,
          inactiveTintColor: color.lightGreen,
          style: { borderTopColor: color.lightGreen },
        }}
      >
        <Tab.Screen name={Screen.Game} component={GameTabContent} />
        <Tab.Screen name={Screen.Dictionary} component={DictionaryTabContent} />
        <Tab.Screen name={Screen.Settings} component={SettingsTabContent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
