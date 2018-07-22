import React from 'react';

import Header from './components/header';
import ItemContainer from './containers/ItemContainer';

import 'semantic-ui-forest-themes/semantic.darkly.min.css';
import './static/styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <ItemContainer />
        </main>
      </div>
    );
  }
}

export default App;
