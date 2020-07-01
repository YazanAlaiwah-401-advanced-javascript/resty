import React from 'react';
import { Route } from 'react-router-dom';
import List from '../list/';
import Home from '../home/';
const Main = (props) => {
  return (
    <main>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/list">
        <List />
      </Route>
    </main>
  );
};

export default Main;
