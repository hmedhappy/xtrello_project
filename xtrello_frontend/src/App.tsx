import React from 'react';
import './App.css';
import MainApp from './MainApp';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { onError } from '@apollo/client/link/error';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

require('dotenv').config();

const errorLink = onError(
  ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        alert(`Graphql Error ${message}`);
        return '';
      });
    }
  }
);

const link = from([
  errorLink,
  new HttpLink({ uri: process.env.NODE_ENV==="development"? process.env.REACT_APP_BACKEND_DEV : process.env.REACT_APP_BACKEND_PROD }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ToastContainer />
          <MainApp />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
