import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto-mono';
import 'toastr/build/toastr.css';

import HeaderContainer from './containers/HeaderContainer';
import Footer from './components/Footer';
import NewCategoryContainer from './containers/NewCategoryContainer';
import EditCategoryContainer from './containers/EditCategoryContainer';
import NewItemContainer from './containers/NewItemContainer';
import EditItemContainer from './containers/EditItemContainer';
import ItemListContainer from './containers/ItemListContainer';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#303030',
    },
    secondary: {
      main: '#5D6D7E',
    },
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono';
    color: lightgray;
    background-color:#303030;
    margin: 0;
    padding: 0;
    padding-top: 100px;
    text-align: center;
  }
  a {
    color: inherit; 
    text-decoration: inherit; 
  }
`;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Fragment>
              <GlobalStyle />
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
