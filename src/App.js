import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import JokesTable from './components/JokesTable';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/home" component={JokesTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
