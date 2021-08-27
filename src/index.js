import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import CountryDetails from './pages/CountryDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/globals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
     <Provider store={ store }>
      <BrowserRouter>
        <App />
        <Switch>
          <Route path="/" exact={ true } component={ Home } />
          <Route path="/country/:code" component={ CountryDetails } />
        </Switch>
      </BrowserRouter>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
