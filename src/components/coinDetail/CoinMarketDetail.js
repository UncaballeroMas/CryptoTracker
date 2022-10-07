import React from 'react';
import {View, Text} from 'react-native';

import {Styles} from './styles';

const CoinDetailScreen = ({item}) => {
  return (
    <View style={Styles.viewMarket}>
      <Text style={Styles.nameText}>{item.name}</Text>
      <Text style={Styles.priceText}>{item.price_usd}</Text>
    </View>
  );
};

export default CoinDetailScreen;
