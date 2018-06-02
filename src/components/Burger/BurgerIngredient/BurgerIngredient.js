import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {
  render() {
    let ingredient = null
    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={classes.BreadBottom} />
        break
      case 'bread-top':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        )
        break
      case 'falafel':
        ingredient = <div className={classes.Falafel} />
        break
      case 'tofu':
        ingredient = <div className={classes.Tofu} />
        break
      case 'beetroot':
        ingredient = <div className={classes.Beetroot} />
        break
      case 'salad':
        ingredient = <div className={classes.Salad} />
        break
      default:
        ingredient = null
    }
    return ingredient
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient
