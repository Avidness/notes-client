import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header';
import Footer from './components/Footer';
import NewCategoryContainer from './containers/NewCategoryContainer';
import CategoryContainer from './containers/EditCategoryContainer';
import NewItemContainer from './containers/NewItemContainer';
import EditItemContainer from './containers/EditItemContainer';
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
                <Route path='/item/:itemid' component={EditItemContainer} />
                <Route path='/newitem' component={NewItemContainer} />
                <Route path='/newcategory' component={NewCategoryContainer} />
                <Route path='/category' component={CategoryContainer} />
              </Switch>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
