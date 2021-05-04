import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// import { Provider } from 'react-redux';
// import store from './store';

import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar/NavBar';
import App from './routes/App';
import theme from './theme/theme';
// Pages
import PageNotFound from './routes/App';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
});

const rootElement = document.getElementById('root');

const root = (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      {/* <Provider store={store}> */}
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Router>
      {/* </Provider> */}
    </ApolloProvider>
  </ThemeProvider>
);

render(root, rootElement);
