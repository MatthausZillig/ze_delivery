import React from 'react';
import Client from './graphql/Client';
import { ApolloProvider } from '@apollo/client';
import { Botao } from './botão/botao';

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <div>
        <p>Stray React</p>
        <Botao />
      </div>
    </ApolloProvider>
  );
};

export default App;
