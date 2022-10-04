import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesScreen} from './FavoritesScreen';
import theme from '../../res/theme';

const Stack = createStackNavigator();

export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.headerBackground,
          shadowOpacity: theme.GrayBackground,
        },
        headerTintColor: theme.white,
      }}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
