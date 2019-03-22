import React, { Component } from 'react'
class addDonut extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			price: 0.00,

		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Donut Name:
					<input type="text" value={this.state.name} onChange={this.handleChange} />
				</label>
				<label>
					Price:
					<input type="number" step="0.01" value={this.state.price} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}	
};

export default addDonut;