import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
//import MyProductsPage from './pages/MyProductspage';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route exact path="/signup" element={<SignupPage/>} />
          
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
