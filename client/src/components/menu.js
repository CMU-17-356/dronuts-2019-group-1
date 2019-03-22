import React, { Component, Fragment } from 'react';
import Donuts from "./donuts";
import CssBaseline from '@material-ui/core/CssBaseline';

class Menu extends Component {


  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Donuts donuts={this.props.donuts} qty={this.props.qty} handleQtyChange={this.props.handleQtyChange} addToCart={this.props.addToCart} />
      </Fragment>

    );

  }

}

export default Menu;
