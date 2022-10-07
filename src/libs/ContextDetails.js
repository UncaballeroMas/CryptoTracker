import Storage from './storage';
import Http from './http';

class ContextDetails {
  static instance = new ContextDetails();

  addFavorite = async (id, coinData) => {
    {
      const coin = JSON.stringify(coinData);
      const key = `favorite-${id}`;

      const stored = await Storage.instance.store(key, coin);

      if (stored) {
        return true;
      }
    }
  };

  removeFavorite = async id => {
    const key = `favorite-${id}`;
    console.log('key', key);

    const remove = await Storage.instance.remove(key);
    if (remove) {
      return false;
    }
  };

  getFavorite = async id => {
    try {
      const key = `favorite-${id}`;
      const favStr = await Storage.instance.get(key);

      if (favStr != null) {
        return true;
      } else false;
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

    return markets;
  };
}

export default ContextDetails;
