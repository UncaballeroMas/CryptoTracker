import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import {Styles} from './styles';

const CoinsItem = ({item, onPress}) => {
  getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('../../assets/arrow_up.png');
    } else {
      return require('../../assets/arrow_down.png');
    }
  };

  return (
    <Pressable onPress={onPress} style={Styles.textTitle}>
      <View style={Styles.row}>
        <Text styles={Styles.symbolText}>{item.symbol}</Text>
        <Text style={Styles.nameText}>{item.name}</Text>
        <Text style={Styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View style={Styles.row}>
        <Text style={Styles.percentText}>{item.percent_change_1h}</Text>
        <Image style={Styles.imageIcom} source={getImgArrow()} />
      </View>
    </Pressable>
  );
};

export default CoinsItem;
