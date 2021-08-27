import React from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Home from "./pages/Home";
import CountryDetails from './pages/CountryDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/globals';

function App() {
  return (<>
    <GlobalStyle />
      <Provider store={ store }>
        <BrowserRouter>
          <Header />
            <Switch>
              <Route path="/" exact={ true } component={ Home } />
              <Route path="/country/:code" component={ CountryDetails } />
            </Switch>
          <Pagination />
        </BrowserRouter>
      </Provider>
  </>);
}

export default App;
