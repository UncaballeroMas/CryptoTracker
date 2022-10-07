import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FavoritesScreen} from './FavoritesScreen';

import Theme from '../../res/theme';

const Stack = createStackNavigator();

export const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.headerBackground,
          shadowOpacity: Theme.GrayBackground,
        },
        headerTintColor: Theme.white,
      }}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
