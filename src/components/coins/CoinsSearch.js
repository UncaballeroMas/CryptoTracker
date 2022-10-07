import React from 'react';
import {Platform, TextInput, View} from 'react-native';

import {Styles} from './styles';

const CoinsSearch = ({onChange}) => {
  return (
    <View>
      <TextInput
        style={[
          Styles.textInput,
          Platform.OS == 'ios' ? Styles.textImputIOS : Styles.texInputAndroid,
        ]}
        onChangeText={onChange}
        placeholder="Search coin"
        placeholderTextColor="#ffff"
      />
    </View>
  );
};

export default CoinsSearch;
