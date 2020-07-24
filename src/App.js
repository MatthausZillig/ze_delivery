import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Client from './graphql/Client';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { ApolloProvider } from '@apollo/client';

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductPage} />
        </Switch>
      </div>
    </ApolloProvider>
  );
};

export default App;
