import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom'
import logo from './img/Dronut.png';
import './index.css';

// Product information
var products = [
    {
		id: 0,
		name: 'Donut 1',
		description: 'Liquorice wafer cupcake toffee chupa chups donut candy',
		price: 3.50,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/apple_krumb.jpg',
    }, {
        id: 1,
		name: 'Donut 2',
		description: 'Pastry gummies sweet roll lemon. Brownie soufflé danish',
		price: 2.50,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/bavarian_kreme.jpg',
	}, {
		id: 2,
		name: 'Donut 3',
		description: 'Chocolate chocolate fruitcake oat cake jujubes cheesecake.',
		price: 4.25,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/boston_kreme.jpg',
    }, {
		id: 3,
		name: 'Donut 4',
		description: 'Chocolate jujubes gummies carrot cake donut dessert caramels sweet roll.',
		price: 3.50,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/chocolate_kreme.jpg',
    }, {
		id: 4,
		name: 'Donut 5',
		description: 'Croissant ice cream cake muffin halvah. Tiramisu tiramisu.',
		price: 3.75,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/cinnamon_sugar.jpg',
    }, {
		id: 5,
		name: 'Donut 6',
		description: 'Sesame snaps cake sesame snaps. Jujubes brownie soufflé chocolate. Apple pie icing dessert sweet roll topping. Lollipop pastry gummi bears.',
		price: 2.95,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/jelly.jpg',
    }, {
		id: 6,
		name: 'Donut 7',
		description: 'Gummies candy wafer candy. Pudding cake marzipan oat cake marzipan bonbon.',
		price: 3.95,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/powdered_sugar.jpg',
    }, {
		id: 7,
		name: 'Donut 8',
		description: 'Liquorice donut tootsie roll. Jelly-o dessert brownie sesame snaps ice cream macaroon. Soufflé sweet tart.',
		price: 5.00,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/strawberry_frosted.jpg',
    }, {
		id: 8,
		name: 'Donut 9',
		description: 'Cheesecake fruitcake pudding. Cotton candy pastry chocolate sesame snaps jujubes cookie chupa chups. Fruitcake dragée.',
		price: 4.00,
		img: 'https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/blueberry.jpg',
    },
];

var HomeScreen = () => (
	<Link to='menu'>
		<div>
			<h2>Dronuts Prototype</h2>
		</div>
	</Link>
)

class DronutLogo extends Component {
	render() {
		return (
			<Link to='/menu'>
				<div className="dronutLogoDiv">
					<img className="dronutImg" src={logo} alt="Dronut Logo"/>
				</div>
			</Link>
		);
	}
	
}

// Allow the user to enter their location/
class LocationEntry extends React.Component {
	render() {
    	return( 
			<div>
				<header>
					<BackButton />
					<DronutLogo />
				</header>
				
				<div>
					<h2>Confirm Your Delivery Location</h2>
				</div>
				
				<div className="addressDiv">
					<img className="mapImg" src="https://www.uwgb.edu/UWGBCMS/media/Maps/images/map-icon.jpg" alt="Map of Area"/>
				</div>
				
				<div className="addressDiv">
					<b>Your Location:</b> 1234 Address Drive Pittsburgh, PA 15213
				</div>
				
				<Link to='/final'>
					<div className="checkoutDiv">
						<button>Confirm</button>
					</div>
				</Link>
				
			</div>
		);
    }
};


var cart = [];
cart.totalcart = 0;

class BackButton extends React.Component {
	render() {
		return (
			<Link to='/menu'>
				<button className="backButton">Back</button>
			</Link>
		);
	}
}


class CartButton extends React.Component {
	render() {
		return (
			<Link to='/cart'>
				<button className="cartButton">Cart</button>
			</Link>
		);
	}
}

class Home extends Component {
	render () {
		return (
			<div>
				<header>
					<DronutLogo />
					<CartButton />
				</header>

				<div className="store">
					<div className="menuTitle">
						<h2>Available Donuts</h2>
					</div>
					{products.map((item) => 
						<ProductsList product={item} key={item.id} />
					)} 
				</div>
			</div>
		);
	}
}

class ProductsList extends Component {
	render() {
		var prod = this.props.product;

		return (
			<div className={'prod prod-' + prod.id}>
				<div className="name">
					{prod.name}
				</div>

				<div className="prod-contet">
					<div className="photo">
						<img src={prod.img} alt={prod.name} />
					</div>

					<div className="description">
						{prod.description.substring(0, 40) + "..."}
					</div>

					<div className="price">
						${prod.price.toFixed(2)}
					</div>
				</div>
				<button onClick={() => alert('Donut Added!')}>Add Donut to Order</button>
			</div>
		);
	}
}


class Cart extends React.Component {
	
	render() {
		return (
			<div>
				<header>
					<BackButton />
					<DronutLogo />
				</header>
				
				<div className="store cart">
					<h3>Donut Cart</h3>
					
					<div className="cartTable">
						<div className="table minimalistBlack">
							<div className="tableHeading">
								<div className="tableRow">
									<div className="tableHead description">Donut Type</div>
									<div className="tableHead quantity">Quantity</div>
									<div className="tableHead subtotal">Subtotal</div>
								</div>
							</div>
							
							<div className="tableBody">
								<div className="tableRow">
									<div className="tableCell total">Donut XXXX</div>
									<div className="tableCell">2</div>
									<div className="tableCell">$5.50</div>
								</div>
							</div>

							<div className="tableBody">
								<div className="tableRow">
									<div className="tableCell total">Donut YYY</div>
									<div className="tableCell">1</div>
									<div className="tableCell">$3.25</div>
								</div>
							</div>
							
							<div className="tableFoot tableFootStyle">
								<div className="tableRow">
									<div className="tableCell "><b>Total</b></div>
									<div className="tableCell ">3</div>
									<div className="tableCell ">$8.75</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				<CheckoutButton />
			</div>										
		)
	}
}

class CheckoutButton extends React.Component {
	render() {
		return (
			<div className="checkoutDiv">
				<Link to="/location" className="checkoutButton">
					<button>Proceed to checkout</button>
				</Link>
			</div>
		);
	}
}


// Order confirmation screen, shown after hitting "confirm"
// Should modify to actually take in values to display
class FinalPage extends Component {
	render() {
		return (
			<div className="finalPageDiv">
				<h2>Your order has been received!</h2>
				<h3>Your donut will arrive in <b>14 minutes</b></h3>
			</div>
		);
	}
}


class App extends Component {
	render() {
		return (
			<Router>
				<div>

					<Route path='/' component={HomeScreen} />
					<Route path='/location' component={LocationEntry} />
					<Route path='/cart' component={Cart} />
					<Route path='/menu' component={Home} />
					<Route path='/final' component={FinalPage} />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));