import React, { useState, useEffect } from 'react';
import './components/scss/App.scss';
import { Header } from './components';
import { Home, Card } from './pages';
import { Route } from 'react-router-dom';
import * as axios from 'axios';
function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);
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
        <Route path='/' exact render={() => <Home itemsShop={pizzas} />} />
        <Route path='/card' exact render={Card} />
      </div>
    </div>
  );
}

export default App;
