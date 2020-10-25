import React from 'react';
import './components/scss/App.scss';
import { Header } from './components';
import { Home, Card } from './pages';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' exact component={Home} />
        <Route path='/card' exact component={Card} />
      </div>
    </div>
  );
}

export default App;
