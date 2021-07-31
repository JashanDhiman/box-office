import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is the main page
      </Route>
      <Route>this is my 404 error</Route>
    </Switch>
  );
}

export default App;
