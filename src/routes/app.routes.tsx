import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Sensors from '../screens/Sensors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppTabRoutes(): JSX.Element {
  const { colors } = useTheme();

  return (
    <NavigationContainer independent>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.primaryLight,
          tabBarActiveTintColor: colors.contrast,
          tabBarStyle: {
            borderTopWidth: 0,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            backgroundColor: colors.background,
            height: 70,
          },
        }}>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo size={24} name="light-bulb" color={color} />
            ),
          }}
        />
        <Screen
          name="Sensors"
          component={Sensors}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                size={24}
                name="motion-sensor"
                color={color}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
