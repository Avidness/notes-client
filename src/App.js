import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NewCategoryContainer from './containers/NewCategoryContainer';
import NewItemContainer from './containers/NewItemContainer';
import ItemContainer from './containers/ItemContainer';
import ItemListContainer from './containers/ItemListContainer';

import './static/styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main id='content'>
          <Route path='/items' component={ItemListContainer} />
          <Route path='/item/:itemid' component={ItemContainer} />
          <Route path='/newitem' component={NewItemContainer} />
          <Route path='/newcategory' component={NewCategoryContainer} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
