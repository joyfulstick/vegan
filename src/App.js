import * as actions from './store/actions'
import React, { Component } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'
import Logout from './containers/Auth/Logout/Logout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import { connect } from 'react-redux'

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
})
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
})
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
})

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }
  render() {
    let routs = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated)
      routs = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      )
    return (
      <div>
        <Layout>{routs}</Layout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
)
