import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as axios from 'axios';
import { setPizza } from '../redux/action/pizzas';

const dispatch = useDispatch();


  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizza(data.pizzas));
    });
  }, [];
