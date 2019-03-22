import React, { Component } from 'react'
import './addDonut.css'
import firebase from '../firebase-config'
const db = firebase.firestore();


class addDonut extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			price: 0.00,
			ingredient_string: '', //pre parse
			ingredient: [], img: "https://cmu-17-356.github.io/Dronuts/assets/donut_flavors/chocolate_kreme.jpg"
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// parseIngredient(ingredient_string){

	// }

	handleChange(event) {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });

		if (name == 'ingredient_string') {
			this.setState({ ingredient: event.target.value.split(",") });
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		var data = {
			name: this.state.name,
			price: this.state.price,
			img: this.state.img,
			description: this.state.ingredient_string
		}
		var setDoc = db.collection('donuts').add(data);
		alert("Donut Submitted! Check Menu")
	}

	render() {
		return (
			<div id='addDonutForm'>
				<h2> Add New Donut </h2>
				<form onSubmit={this.handleSubmit}>
					<label for="name">
						Donut Name:
					</label>
					<br />
					<input
						id="name"
						name="name"
						type="text"
						value={this.state.name}
						onChange={this.handleChange} />
					<br />
					<label for="price">
						Price:

					</label>
					<br />
					<input
						id="price"
						name="price"
						type="number"
						step="0.01"
						value={this.state.price}
						onChange={this.handleChange} />
					<br />
					<label for="ingredient_string">
						Ingredients (Separate by commas):

					</label>
					<br />
					<input
						id="ingredient_string"
						name="ingredient_string"
						type="text"
						value={this.state.ingredient_string}
						onChange={this.handleChange} />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default addDonut;