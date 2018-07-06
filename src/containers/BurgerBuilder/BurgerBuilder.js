import * as actions from '../../store/actions/index'
import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders'
import { connect } from 'react-redux'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHanlder'

class BurgerBuilder extends Component {
  state = {
    purchaising: false,
  }

  componentDidMount() {
    this.props.onInitIngredients()
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    return sum > 0
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchaising: true })
    } else {
      this.props.history.push('/auth')
    }
  }

  purchaseCancelHandler = () => {
    this.setState({ purchaising: false })
  }

  purchaseContinueHandler = () => {
    this.props.onInitPurchase()
    this.props.history.push('/checkout')
  }

  render() {
    const disabledInfo = {
      ...this.props.ings,
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null
    let burger = this.props.error ? (
      <p
        style={{
          backgroundColor: 'rgba(200,0,0,.5)',
          color: '#fff',
        }}
      >
        Ingredients can&apos;t be loaded
      </p>
    ) : (
      <Spinner />
    )
    if (this.props.ings) {
      burger = (
        <Auxiliary>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngAdded}
            ingredientRemove={this.props.onIngRemoved}
            displayed={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            price={this.props.price}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
          />
        </Auxiliary>
      )
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      )
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.purchaising}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngAdded: ingName => dispatch(actions.addIngredient(ingName)),
    onIngRemoved: ingName => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(BurgerBuilder, axios))
