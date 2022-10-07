import {StyleSheet} from 'react-native';
import Theme from '../../res/theme';

export const Styles = StyleSheet.create({
  favScreen: {
    backgroundColor: Theme.headerBackground,
    flex: 1,
  },

  favView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  favText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
});
