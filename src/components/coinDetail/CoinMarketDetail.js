import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../res/theme';

const CoinDetailScreen = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{item.price_usd}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0, 0.1',
    borderColor: theme.textBrown,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  nameText: {
    color: theme.white,
    fontWeight: 'bold',
  },
  priceText: {
    color: theme.white,
  },
});

export default CoinDetailScreen;
