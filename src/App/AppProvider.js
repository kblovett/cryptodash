import React from 'react';
const cc = require('cryptocompare');
cc.setApiKey(
  '604a330bf24a36bdae0b19dc939bae4b4803b3cdc6a8e01986ff7a3d52d92044'
);

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavourites: this.confirmFavourites,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  confirmFavourites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard',
    });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'hello',
      })
    );
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }
    return {};
  }

  setPage = (page) => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
