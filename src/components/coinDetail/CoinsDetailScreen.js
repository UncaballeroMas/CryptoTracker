import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SectionList,
  FlatList,
  Pressable,
} from 'react-native';
import Http from '../../libs/http';
import theme from '../../res/theme';
import CoinDetailScreen from './CoinMarketDetail';
import Storage from '../../libs/storage';
import AsyncStorage from '@react-native-community/async-storage';

class CoinsDetailScreen extends Component {
  state = {
    coin: {},
    markets: {},
    isFavorite: false,
  };

  toogleFavorite = () => {
    if (this.state.isFavorite) {
      this.removeFavorite();
    } else {
      this.addFavorite();
    }
  };

  addFavorite = async () => {
    const coin = JSON.stringify(this.state.coin);
    const key = `favorite-${this.state.coin.id}`;
    console.log('key', key);

    const stored = await Storage.instance.store(key, coin);

    console.log('stored', stored);

    if (stored) {
      this.setState({isFavorite: true});
    }
  };

  removeFavorite = async () => {
    try {
      const key = `favorite-${this.state.coin.id}`;
      console.log('key', key);

      const remove = await Storage.instance.remove(key);
      if (remove) {
        this.setState({isFavorite: false});
      }
    } catch (err) {
      console.log('remove favorites err', err);
    }
  };

  getFavorite = async () => {
    try {
      const key = `favorite-${this.state.coin.id}`;
      const favStr = await Storage.instance.get(key);

      if (favStr != null) {
        this.setState({isFavorite: true});
      }
    } catch (err) {
      console.log('get favorites err', err);
    }
  };

  getSymbolIcom = name => {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '_');

      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };
  getSections = coin => {
    const data = [
      {
        title: 'Markep cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coin.volume24],
      },
      {
        title: 'Cange 24h',
        data: [coin.percent_change_24h],
      },
    ];
    return data;
  };

  getMarkets = async coinId => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;

    const markets = await Http.instance.get(url);

    this.setState({markets});
  };

  componentDidMount() {
    const {coin} = this.props.route.params;

    this.props.navigation.setOptions({title: coin.symbol});

    this.getMarkets(coin.id);

    this.setState({coin}, () => {
      this.getFavorite();
    });
  }

  render() {
    const {coin, markets, isFavorite} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <View style={styles.row}>
            <Image
              style={styles.icomImg}
              source={{uri: this.getSymbolIcom(coin.name)}}
            />
            <Text style={styles.titleText}>{coin.name}</Text>
          </View>
          <Pressable
            onPress={this.toogleFavorite}
            style={[
              styles.buttonFav,
              isFavorite ? styles.favButtonRemove : styles.favButtonAdd,
            ]}>
            <Text style={styles.buttonText}>
              {isFavorite ? 'Remove favorite' : 'Add Favorites'}
            </Text>
          </Pressable>
        </View>
        <SectionList
          style={styles.section}
          sections={this.getSections(coin)}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />

        <Text style={styles.marketsTitle}>Markets</Text>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={markets}
          renderItem={({item}) => <CoinDetailScreen item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.headerBackground,
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
    color: theme.white,
    marginLeft: 40,
  },

  icomImg: {
    height: 25,
    width: 25,
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
    color: theme.white,
    fontSize: 14,
  },
  sectionText: {
    color: theme.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  marketsTitle: {
    color: theme.white,
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
    color: theme.white,
  },
  favButtonAdd: {
    backgroundColor: theme.lightBlueBorder,
  },
  favButtonRemove: {
    backgroundColor: theme.errorRed,
  },
});

export default CoinsDetailScreen;
