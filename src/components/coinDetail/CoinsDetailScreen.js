import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import CoinDetailScreen from './CoinMarketDetail';
import ContextDetails from '../../libs/ContextDetails';

import {Styles} from './styles';

class CoinsDetailScreen extends Component {
  state = {
    coin: {},
    markets: {},
    isFavorite: false,
  };

  toogleFavorite = (id, coin) => {
    if (this.state.isFavorite) {
      Alert.alert('Remote favorite', 'Are you sure?', [
        {
          text: 'cancel',
          onPress: () => {},
          style: 'cancel',
        },

        {
          text: 'remove',
          onPress: async () => {
            try {
              this.setState({}, async () => {
                this.setState({
                  isFavorite: await ContextDetails.instance.removeFavorite(id),
                });
              });
            } catch (err) {
              console.log('remove favorites err', err);
            }
          },
          style: 'destructive',
        },
      ]);
    } else {
      this.setState({
        isFavorite: ContextDetails.instance.addFavorite(id, coin),
      });
    }
  };

  componentDidMount() {
    const {coin} = this.props.route.params;

    this.props.navigation.setOptions({title: coin.symbol});

    this.setState({coin}, async () => {
      this.setState({
        isFavorite: await ContextDetails.instance.getFavorite(
          coin.id,
          this.setState,
        ),
      });
      this.setState({
        markets: await ContextDetails.instance.getMarkets(coin.id),
      });
    });
  }

  render() {
    const {coin, markets, isFavorite} = this.state;
    console.log('coin prueba', isFavorite);
    return (
      <View style={Styles.viewDetail}>
        <View style={Styles.subHeader}>
          <View style={Styles.row}>
            <Image
              style={Styles.icomImg}
              source={{
                uri: ContextDetails.instance.getSymbolIcom(coin.name),
              }}
            />
            <Text style={Styles.titleText}>{coin.name}</Text>
          </View>
          <Pressable
            onPress={() => this.toogleFavorite(coin.id, coin)}
            style={[
              Styles.buttonFav,
              isFavorite ? Styles.favButtonRemove : Styles.favButtonAdd,
            ]}>
            <Text style={Styles.buttonText}>
              {isFavorite ? 'Remove favorite' : 'Add Favorites'}
            </Text>
          </Pressable>
        </View>
        <SectionList
          style={Styles.section}
          sections={ContextDetails.instance.getSections(coin)}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <View style={Styles.sectionItem}>
              <Text style={Styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={Styles.sectionHeader}>
              <Text style={Styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />

        <Text style={Styles.marketsTitle}>Markets</Text>
        <FlatList
          style={Styles.list}
          horizontal={true}
          data={markets}
          renderItem={({item}) => <CoinDetailScreen item={item} />}
        />
      </View>
    );
  }
}

export default CoinsDetailScreen;
