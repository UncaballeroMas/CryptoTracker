import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import CoinsItem from '../coins/CoinsItem';
import {FavoritesEmptyState} from './FavoritesEmptyState';

import Storage from '../../libs/storage';
import {Styles} from './styles';

export class FavoritesScreen extends Component {
  state = {
    favorites: [],
  };

  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();

      const keys = allKeys.filter(key => key.includes('favorite-'));

      const favs = await Storage.instance.multiGet(keys);

      const favorites = favs.map(fav => JSON.parse(fav[1]));

      this.setState({favorites});

      console.log('keys', allKeys);
    } catch (err) {
      console.log('get favorites err', err);
    }
  };

  handlePress = coin => {
    this.props.navigation.navigate('CoinsDetail', {coin});
  };

  componentDidMount() {
    this.getFavorites();

    this.props.navigation.addListener('focus', this.getFavorites);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getFavorites);
  }
  render() {
    const {favorites} = this.state;
    return (
      <View style={Styles.favScreen}>
        {favorites.length == 0 ? <FavoritesEmptyState /> : null}
        {favorites.length > 0 ? (
          <FlatList
            data={favorites}
            renderItem={({item}) => (
              <CoinsItem item={item} onPress={() => this.handlePress(item)} />
            )}
          />
        ) : null}
      </View>
    );
  }
}
