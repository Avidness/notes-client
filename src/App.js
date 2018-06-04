import React from 'react';

import Items from './pages/Items'

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
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload. 🛠
          </p>
          <Items />
        </main>
      </div>
    );
  }
}

export default App;
