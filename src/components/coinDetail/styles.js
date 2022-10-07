import {StyleSheet} from 'react-native';
import Theme from '../../res/theme';

export const Styles = StyleSheet.create({
  viewDetail: {
    flex: 1,
    backgroundColor: Theme.headerBackground,
  },

  row: {
    flexDirection: 'row',
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0. 0.1)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.white,
    marginLeft: 40,
  },

  icomImg: {
    height: 25,
    width: 25,
    backgroundColor: 'red',
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  section: {
    maxHeight: 220,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0. 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Theme.white,
    fontSize: 14,
  },
  sectionText: {
    color: Theme.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketsTitle: {
    color: Theme.white,
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  buttonFav: {
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: Theme.white,
  },
  favButtonAdd: {
    backgroundColor: Theme.lightBlueBorder,
  },
  favButtonRemove: {
    backgroundColor: Theme.errorRed,
  },

  viewMarket: {
    backgroundColor: 'rgba(0,0,0, 0.1',
    borderColor: Theme.textBrown,
    borderWidth: 1,
    padding: 16,
    marginRight: 8,
    alignItems: 'center',
  },
  nameText: {
    color: Theme.white,
    fontWeight: 'bold',
  },
  priceText: {
    color: Theme.white,
  },
});
