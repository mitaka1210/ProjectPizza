import React from 'react';
import './components/scss/App.scss';

import { Header } from './components';
import { Home, Card } from './pages';
import { Route } from 'react-router-dom';

function App() {
  //useEffect(() => {
  //  fetch('http://localhost:3000/db.json')
  //    .then((resp) => resp.json())
  //    .then((json) => {
  //      setPizzas(json.pizzas);

  //    });
  //}, []);
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route path='/' component={Home} exact />
        <Route path='/card' component={Card} exact />
      </div>
    </div>
  );
}

export default App;
