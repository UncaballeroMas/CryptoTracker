import {ThemeProvider} from '@react-navigation/native';
import React, {component} from 'react';
import {Platform, TextInput, View, StyleSheet} from 'react-native';
import theme from '../../res/theme';

const CoinsSearch = ({onChange}) => {
  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS == 'ios' ? styles.textImputIOS : styles.texInputAndroid,
        ]}
        onChangeText={onChange}
        placeholder="Search coin"
        placeholderTextColor="#ffff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: theme.mediumDarkGray,
    paddingleft: 16,
    color: theme.white,
  },

  texInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: theme.white,
    borderRadius: 8,
  },
  textImputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});
export default CoinsSearch;
