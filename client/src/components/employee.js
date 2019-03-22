import React, { Component } from 'react'
//import logo from './img/Dronut.png';
import './employee.css'
import {Link} from 'react-router-dom'
import SimpleSnackBar from './fullfilled_order'

function OrderRow(props){

	return (
		<tr>
			<td align="center">
				<div class="Incoming">
					<h2>Order #{props.id} </h2>
					<b> Order Summary: </b>
					<p>
					1 x Apple Krumb  <br/>
					1 x Bavarian Kreme <br/> 
					1 x Boston Kreme 
					</p>
					<h3> Pack Into: Drone 1 </h3>
				</div>
				<Link to='/employeee'>
					<div class="confirmation_order_sent">
						<SimpleSnackBar/>
					</div>
				</Link>
			</td>
		</tr>
	);
}

class IncomingOrdersRemoved extends Component {
	state = {
		ids: [2,3,4,5,6]
	};
	render() {
		const {ids} = this.state;
		return (
			<div>
				<h2 align="center"> Incoming Orders </h2>
				<table>
					<tbody>
						{ids.map((i) => (<OrderRow id={i}/>))}
					</tbody>
				</table>
			</div>
		);
	}
};

class IncomingOrdersList extends Component {	
	state = {
		ids: [1,2,3,4,5,6]
	};
	render() {
		const {ids} = this.state;
		return (
			<div>
				<h2 align="center"> Incoming Orders </h2>
				<table>
					<tbody>
						
						{ids.map((i) => (<OrderRow id={i}/>))}
						
					</tbody>
				</table>
			</div>
		);
	}
};

export {IncomingOrdersList, IncomingOrdersRemoved};