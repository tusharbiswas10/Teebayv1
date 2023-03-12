import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyProductsPage from './pages/MyProductspage';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/my-products" component={MyProductsPage} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
