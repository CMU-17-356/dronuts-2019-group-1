import React, { Component } from 'react';
import Routes from "./components/routes"
import Nav from './components/nav';
import Footer from './components/footer';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import firebase from './firebase-config'


const db = firebase.firestore();
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF99C8',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#FFFFFF"
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  state = {
    donuts: [],
    cart: [],
    qty: 1,
    adr: "Current Address",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    lat: "",
    lng: ""
  }

  handleNameChange = val => e => {
    this.setState({
      [val]: e.target.value
    })
  }
  handleAdrChange = val => adr => {
    this.setState({
      [val]: adr
    })
    console.log(this.state)

  }
  handleQtyChange = qty => {
    if (qty != '') {
      qty = Number(qty)
      this.setState({
        qty: qty
      });
    }
  };

  handleRemoveProduct = (product) => {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x[0] == product);
    cart.splice(index, 1);
    this.setState({
      cart: cart

    });

  }

  checkProduct = (product) => {
    let cart = this.state.cart;
    return cart.some((item) => {
      return item[0] === product;
    });
  }

  addToCart = selectedDonut => {

    var cartItems = this.state.cart;
    var data = selectedDonut
    if (this.checkProduct(data.name)) {
      let index = cartItems.findIndex(x => x[0] == data.name);
      cartItems[index][1] =
        Number(cartItems[index][1]) + Number(this.state.qty);
    } else {
      var tmpCart = [data.name, this.state.qty, data.price, data.img, data.description]
      cartItems.push(tmpCart);
    }
    this.setState({
      cart: cartItems
    })
    // console.log(this.state.cart)

  }


  async componentDidMount() {
    try {
      db.collection('donuts').get().then(snapshot => {
        var data = [];
        if (snapshot.empty) {
          console.log('no docs');
          return
        }
        snapshot.forEach(doc => {
          data.push(doc.data());

        })
        this.setState({
          donuts: data
        })
      })
    } catch (error) {
      this.setState({
        error
      })
    }

  }
  render() {
    return (

      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Nav cart={this.state.cart} handleRemoveProduct={this.handleRemoveProduct} />
            <Routes adr={this.state.adr} pState={this.state} handleQtyChange={this.handleQtyChange}
              addToCart={this.addToCart} handleNameChange={this.handleNameChange} handleAdrChange={this.handleAdrChange} />
            <Footer />
          </div>
        </BrowserRouter>

      </MuiThemeProvider>

    );

  }

}

export default App;
