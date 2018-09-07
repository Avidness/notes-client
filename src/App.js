import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

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
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />
              <Switch>
                <Route path='/items' component={ItemListContainer} />
                <Route path='/item/:itemid' component={ItemContainer} />
                <Route path='/newitem' component={NewItemContainer} />
                <Route path='/newcategory' component={NewCategoryContainer} />
              </Switch>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
