import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './styles/style.scss'
import { HomePage } from './features/HomePage/HomePage';
import { Secondary } from './features/Secondary/Secondary';
import { HeaderApp } from './features/HeaderApp/HeaderApp';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <HeaderApp />
        <Switch>
          <Route path="/SecondaryPage" component={Secondary} exact />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
