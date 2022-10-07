import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import CoinsItem from './CoinsItem';
import CoinsSearch from './CoinsSearch';

import {Styles} from './styles';
import Http from '../../libs/http';

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
      <View style={Styles.coinScreen}>
        <CoinsSearch onChange={this.handleSearch} />
        {loading ? <ActivityIndicator style={Styles.loader} /> : null}
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

export default CoinsScreen;
