import React from 'react';
import burgerLogo from '../../assets/images/vegan-burger-logo.png';
import classes from './Logo.css';

const logo = () => (
  <figure className={classes.Logo}>
    <img src={burgerLogo} alt="Vegan Burger" />
  </figure>
);

export default logo;