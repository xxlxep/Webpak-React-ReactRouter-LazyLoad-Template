import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = props => (
  <div classNmae={classes.PizzaImage}>
    <img src={PizzaImage} className={classes.PizzaImg} />
  </div>
);

export default pizzaImage;
