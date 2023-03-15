import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { stripIgnoredCharacters } from 'graphql';
import { HttpLink } from '@apollo/client';

// create an HTTP link to the GraphQL API
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

// create an authentication link, which adds an authorization header to each request with a bearer token retrieved from localStorage.
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// a new instance of ApolloClient is created with the authentication link and HTTP link, as well as a new InMemoryCache instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
