import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import theme from '../../res/theme';
import {FavoritesEmptyState} from './FavoritesEmptyState';
export class FavoritesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FavoritesEmptyState />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.headerBackground,
    flex: 1,
  },
});
