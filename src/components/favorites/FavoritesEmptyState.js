import React from 'react';
import {Text, View} from 'react-native';

import {Styles} from './styles';

export const FavoritesEmptyState = () => {
  return (
    <View style={Styles.favView}>
      <Text style={Styles.favText}>No tienes favoritos</Text>
    </View>
  );
};
