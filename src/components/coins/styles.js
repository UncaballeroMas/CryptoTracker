import {StyleSheet} from 'react-native';
import Theme from '../../res/theme';

export const Styles = StyleSheet.create({
  coinScreen: {
    flex: 1,
    backgroundColor: Theme.headerBackground,
  },
  titleText: {
    backgroundColor: Theme.headerBackground,
    headerTintColor: Theme.white,
    headerTitleAlign: 'center',
  },
  textTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Theme.inputPlaceholderText,
    borderBottomWidth: 1,
    marginLeft: Platform.OS == 'ios' ? 16 : 0,
    paddingLeft: Platform.OS == 'ios' ? 0 : 16,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: Theme.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: Theme.white,
    fontSize: 14,
    marginRight: 16,
  },
  priceText: {
    color: Theme.white,
    fontSize: 14,
  },
  percentText: {
    color: Theme.white,
    fontSize: 12,
    marginRight: 8,
  },

  imageIcom: {
    width: 22,
    height: 22,
  },
  loader: {
    size: 'large',
    color: Theme.white,
  },

  textInput: {
    height: 46,
    backgroundColor: Theme.mediumDarkGray,
    paddingleft: 16,
    color: Theme.white,
  },

  texInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Theme.white,
    borderRadius: 8,
  },
  textImputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});
