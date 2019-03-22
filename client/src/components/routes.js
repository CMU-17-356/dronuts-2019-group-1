import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from './main';
import Menu from './menu';
import Error from './error';
import ReactMap from './reactmap';

import Checkout from './checkout/Checkout';
import { IncomingOrdersList, IncomingOrdersRemoved } from './employee';

import Login from './login';
import Analytic from './analytics';
import addDonut from './addDonut';

class Routes extends Component {
  render() {
    return (

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/menu" render={() => <Menu qty={this.props.pState.qty} donuts={this.props.pState.donuts} handleQtyChange={this.props.handleQtyChange} addToCart={this.props.addToCart} />} />
        <Route path="/cart" render={() => <Checkout adr={this.props.pState.adr} handleNameChange={this.props.handleNameChange} pState={this.props.pState} />} />
        <Route path="/location" render={() => <ReactMap handleAdrChange={this.props.handleAdrChange} />} />

        <Route path="/employee" component={IncomingOrdersList} />
        <Route path="/employeee" component={IncomingOrdersRemoved} />

        <Route path="/login" component={Login} />
        <Route path="/drones" component={() => { window.location = 'http://drones.17-356.isri.cmu.edu'; return null; }} />
        <Route path="/analytics" component={Analytic} />
        <Route path="/add_donut" component={addDonut} />
        <Route component={Error} />
      </Switch>


    );

  }

}

export default Routes;
