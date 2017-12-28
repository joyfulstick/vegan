import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends Component {
  state = {
    ingredients: null,
    disabled: false
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
    this.setState({ disabled: true });
  }

  render() {
    let summary = <Redirect to="/"/>;
    if(this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            disabled={this.state.disabled} />
          <Route
            path={`${this.props.match.path}/contact-data`}
            component={ContactData} />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);