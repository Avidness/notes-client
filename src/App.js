import React from 'react';

import ItemContainer from './containers/ItemContainer'

import img_gear from './images/gear.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={img_gear} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes</h1>
        </header>

        <main>
          <ItemContainer />
        </main>
      </div>
    );
  }
}

export default App;
