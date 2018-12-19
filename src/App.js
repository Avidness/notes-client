import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import HeaderContainer from './containers/HeaderContainer';
import Footer from './components/Footer';
import NewCategoryContainer from './containers/NewCategoryContainer';
import EditCategoryContainer from './containers/EditCategoryContainer';
import NewItemContainer from './containers/NewItemContainer';
import EditItemContainer from './containers/EditItemContainer';
import ItemListContainer from './containers/ItemListContainer';

import './static/styles/App.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: '#5D6D7E',
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Fragment>
              <HeaderContainer />
              <Switch>
                <Route path='/items' component={ItemListContainer} />
                <Route path='/item/:itemid' component={EditItemContainer} />
                <Route path='/newitem' component={NewItemContainer} />
                <Route path='/newcategory' component={NewCategoryContainer} />
                <Route path='/category/:catid' component={EditCategoryContainer} />
                <Redirect to="/items" />
              </Switch>
              <Footer />
            </Fragment>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
