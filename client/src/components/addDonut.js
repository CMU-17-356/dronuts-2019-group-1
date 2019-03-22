import React, { Component } from 'react'
import './addDonut.css'

class addDonut extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			price: 0.00,
			ingredient_string: '', //pre parse
			ingredient: []
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	parseIngredient(ingredient_string){

	}

	handleChange(event) {
		const name = event.target.name;
    	this.setState({[name]: event.target.value});

    	if (name == 'ingredient_string'){
    		this.setState({ingredient: event.target.value.split(",")});
    	}
  	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.name + this.state.price + this.state.ingredient);
		event.preventDefault();

		//call api here to create new donut and set paramters to state values
	}

	render() {
		return (
			<div id='addDonutForm'>
				<h2> Add New Donut </h2>
				<form onSubmit={this.handleSubmit}>
					<label for="name">
						Donut Name:
					</label>
					<br/>
					<input 
						id="name"
						name="name" 
						type="text" 
						value={this.state.name} 
						onChange={this.handleChange} />
					<br/>
					<label for="price">
						Price:
						
					</label>
					<br/>
					<input 
						id="price"
						name="price"
						type="number" 
						step="0.01" 
						value={this.state.price} 
						onChange={this.handleChange} />
					<br/>
					<label for="ingredient_string">
						Ingredients (Separate by commas):
						
					</label>
					<br/>
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