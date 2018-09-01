import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import ItemContainer from './containers/ItemContainer';
import ItemListContainer from './containers/ItemListContainer';

import 'semantic-ui-forest-themes/semantic.darkly.min.css';
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
