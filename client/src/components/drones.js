import { Component } from 'react';

class DronesList extends Component {
	
	render(){
		return async() => {
			var win = window.open('http://drones.17-356.isri.cmu.edu', '_blank');
			console.log(win)
			console
			if (win == null){
				return;
			}
			win.focus();
		}
	}
}

export default DronesList