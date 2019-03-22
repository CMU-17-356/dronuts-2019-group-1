import React, { Component } from 'react'
import axios from "axios";
//import logo from './img/Dronut.png';
import './employee.css'
import { Link } from 'react-router-dom'
import SimpleSnackBar from './fullfilled_order'
import firebase from '../firebase-config'


const db = firebase.firestore();
class OrderRow extends Component {
	constructor(props) {
		super(props);
		this.state = { drone_id: 0 };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	deleteData = (e) =>{
		e.preventDefault()
	}
	handleChange(event) {
		this.setState({ drone_id: event.target.value });
	}

	handleSubmit(event) {
		alert('submitted');
		event.preventDefault();
		alert(this.state.drone_id);
		var link = `http://drones.17-356.isri.cmu.edu/api/drones/${this.state.drone_id}/send`;
		axios.put(link, {
			lat: this.props.order.lat, //link to db to change lat and lon
			lon: this.props.order.lng
		}).then(response => {
			console.log(response.data)
		}).catch(error => {
			console.log(error)
		});
		//call api 
	}

	render() {
		const { donuts } = this.props.order;
		return (
			<tr>
				<td align="center">
					<div class="Incoming">
						<h2>Order for {this.props.order.first_name} {this.props.order.last_name} </h2>
						<b> Order Summary: </b>

						{donuts.map((i) => (
							<p>{i.name} {i.qty} x {i.price}</p>


						))}

						<form onSubmit={this.handleSubmit}>
							<label>
								Choose Drone:
					          <select value={this.state.drone_id} onChange={this.handleChange}>
									<option value={1}>Drone 1</option>
									<option value={2}>Drone 2</option>
									<option value={3}>Drone 3</option>
									<option value={4}>Drone 4</option>
								</select>
							</label>
							<input type="submit" value="Submit" onClick={this.deleteData}/>
						</form>
					</div>

				</td>
			</tr>
		);
	}
}

class IncomingOrdersRemoved extends Component {
	state = {
		ids: [2, 3, 4, 5, 6]
	};
	render() {
		console.log(this.state.orders)
		const { ids } = this.state;
		return (
			<div>
				<h2 align="center"> Incoming Orders </h2>
				<table>
					<tbody>
						{ids.map((i) => (<OrderRow id={i} />))}
					</tbody>
				</table>
			</div>
		);
	}
};

class IncomingOrdersList extends Component {
	state = {
		ids: [1, 2, 3, 4, 5, 6],
		orders: []
	};
	async componentDidMount() {
		try {
			db.collection('orders').get().then(snapshot => {
				var data = [];
				if (snapshot.empty) {
					console.log('no docs');
					return
				}
				snapshot.forEach(doc => {
					data.push(doc.data());

				})
				this.setState({
					orders: data
				})
			})
		} catch (error) {
			this.setState({
				error
			})
		}

	}
	render() {
		console.log(this.state.orders)
		const { orders } = this.state;
		return (
			<div>
				<h2 align="center"> Incoming Orders </h2>
				<table>
					<tbody>

						{orders.map((i) => (<OrderRow order={i} />))}

					</tbody>
				</table>
			</div>
		);
	}
};

export { IncomingOrdersList, IncomingOrdersRemoved };