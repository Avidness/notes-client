import React from 'react';
import { Tab } from 'semantic-ui-react';

import Header from './components/header';
import ItemContainer from './containers/ItemContainer';

import 'semantic-ui-forest-themes/semantic.darkly.min.css';
import './static/styles/App.css';

class App extends React.Component {
  render() {
    const panes = [
      { menuItem: 'Tab 1', render: () => <Tab.Pane><ItemContainer /></Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>},
      { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>},
    ];
    return (
      <div className='App'>
        <Header />
        <main id='content'>
          <Tab id='tab-container' panes={panes}/>
        </main>
      </div>
    );
  }
}

export default App;
