import React, {Component} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import Http from '../../libs/http';

import CoinsSearch from './CoinsSearch';
import Theme from '../../res/theme';

import CoinsItem from './CoinsItem';

class CoinsScreen extends Component {
  state = {
    coins: [],
    allCoins: [],
    loading: false,
  };

  componentDidMount = () => {
    this.getCoins();
  };

  getCoins = async () => {
    this.setState({loading: true});

    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );

    this.setState({coins: res.data, allCoins: res.data, loading: false});
  };

  handlePress = coin => {
    this.props.navigation.navigate('CoinsDetail', {coin});
  };

  handleSearch = query => {
    const {allCoins} = this.state;

    const coinsFiltered = allCoins.filter(coin => {
      return (
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase())
      );
    });
    this.setState({coins: coinsFiltered});
  };

  render() {
    const {coins, loading} = this.state;

    return (
      <View style={styles.container}>
        <CoinsSearch onChange={this.handleSearch} />
        {loading ? <ActivityIndicator style={styles.loader} /> : null}
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.headerBackground,
  },

  titleText: {
    color: Theme.white,
    textAlign: 'center',
  },

  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 15,
    margin: 15,
  },

  btnText: {
    color: Theme.white,
    textAlign: 'center',
  },

  loader: {
    size: 'large',
    color: Theme.white,
  },
});

export default CoinsScreen;
