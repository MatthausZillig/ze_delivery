import { ApolloClient, InMemoryCache } from '@apollo/client';

const link = 'https://api.code-challenge.ze.delivery/public/graphql';

const Client = new ApolloClient({
  uri: link,
  cache: new InMemoryCache(),
});

export default Client;
