import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoinsScreen from './CoinsScreen';
import CoinsDetailScreen from '../coinDetail/CoinsDetailScreen';

import Theme from '../../res/theme';

const Stack = createNativeStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.headerBackground,
        },
        headerTintColor: Theme.white,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinsDetail" component={CoinsDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
