import React, { Component } from 'react'
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
			<form onSubmit={this.handleSubmit}>
				<label>
					Donut Name:
					<input 
						name="name" 
						type="text" 
						value={this.state.name} 
						onChange={this.handleChange} />
				</label>
				<br/>
				<label>
					Price:
					<input 
						name="price"
						type="number" 
						step="0.01" 
						value={this.state.price} 
						onChange={this.handleChange} />
				</label>
				<br/>
				<label>
					Ingredients (Separate by commas):
					<input 
						name="ingredient_string"
						type="text"
						value={this.state.ingredient_string}
						onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}	
}

export default addDonut;