import React from 'react';
import 'react-native-gesture-handler';
import {Image} from 'react-native';
import {FavoritesStack} from './src/components/favorites/FavoritesStack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CoinsStack from './src/components/coins/CoinsStack';
import theme from './src/res/theme';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.lightBlueBorder,
          tabBarStyle: {backgroundColor: theme.headerBackground},
        }}>
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('../CryptoTracker/src/assets/bank.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('../CryptoTracker/src/assets/star.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
