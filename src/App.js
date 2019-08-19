import React from 'react';
import { ApolloProvider } from 'react-apollo';
import {
  Switch, Route, BrowserRouter as Router
} from "react-router-dom";
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink} from 'apollo-boost';

import Joke from './components/Joke';
import Signup from './components/Signup';
import Signin from './components/Signin';
import PrivateRoute from './HOC/withAuth';
import Categories from './components/Categories';

const httpLink = new HttpLink({ uri: 'https://sovtech-graphql-server.herokuapp.com/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = JSON.parse(localStorage.getItem('token'));

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });

  return forward(operation);
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/categories" component={Categories} />
          <PrivateRoute exact path="/jokes/:category" component={Joke} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}
