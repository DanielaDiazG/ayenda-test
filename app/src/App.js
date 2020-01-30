import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Songs from './pages/Songs';
import Genres from './pages/Genres';
import MusicPlayer from './pages/MusicPlayer';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Artists} />
      <Route path="/artists/:id/albums" component={Albums} />
      <Route path="/albums/:id/songs" component={Songs} />
      <Route exact path="/genres" component={Genres} />
      <Route path="/genres/:genre_name/random_songs" component={Songs} />
      <Route path="/player" component={MusicPlayer} />
    </Switch>
  );
}

export default App;
