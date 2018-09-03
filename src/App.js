import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ItemContainer from './containers/ItemContainer';
import ItemListContainer from './containers/ItemListContainer';

import './static/styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main id='content'>
          <BrowserRouter>
            <Fragment>
              <Route path='/items' component={ItemListContainer} />
              <Route path='/item/:itemid' component={ItemContainer} />
            </Fragment>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
