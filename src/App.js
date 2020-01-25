import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Artists} />
      <Route path="/artists/:id/albums" component={Albums} />
    </Switch>
  );
}

export default App;
