import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

export default function Api() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);
  return <div></div>;
}
