import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Footer from './footer';
import './reactmap.css';

// Define very basic width/height for the map box
const mapStyles = {
	map: {
		position: 'absolute',
		width: '100%',
		height: '70%'
	}
}

// The CurrentLocation component handles logic for fetching the current 
// location, and subsequently rendering the map to re-center around this location
export class CurrentLocation extends Component {
	constructor(props) {
		super(props);

		const { lat, lng } = this.props.initialCenter;
		this.state = {
			currentLocation: {
				lat: lat,
				lng: lng,
				location: ""
			}
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.google !== this.props.google) {
			this.loadMap();
		}
		if (prevState.currentLocation !== this.state.currentLocation) {
			this.recenterMap();
		}
	}

	// Only gets called when the currentLocation in the component's
	//   state is updated
	recenterMap() {
		const map = this.map;
		const current = this.state.currentLocation;

		const google = this.props.google;
		const maps = google.maps;

		if (map) {
			let center = new maps.LatLng(current.lat, current.lng);
			map.panTo(center);
		}
	}

	// Handle the instance when the map has already loaded.
	// Lifecycle method sets a callback to fetch the current location
	componentDidMount() {
		if (this.props.centerAroundCurrentLocation) {
			if (navigator && navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(pos => {
					const coords = pos.coords;
					this.setState({
						currentLocation: {
							lat: coords.latitude,
							lng: coords.longitude
						}
					});
					Geocode.setApiKey('AIzaSyAns2uECS5cjVGMh7CuTw5HuVsqluYGc48');
					Geocode.fromLatLng(coords.latitude, coords.longitude).then(
						response => {
							const address = response.results[0].formatted_address;
							this.setState({
								location: address
							})
						},
						error => {
							alert(error);
						}
					);
				});
			}
		}
		this.loadMap();
	}

	// Only called after the component has been rendered
	// Grabs a reference to the DOM component to where we 
	//   want our map to be placed.
	loadMap() {
		if (this.props && this.props.google) {
			// checks if google is available
			const { google } = this.props;
			const maps = google.maps;

			const mapRef = this.refs.map;

			// reference to the actual DOM element
			const node = ReactDOM.findDOMNode(mapRef);

			let { zoom } = this.props;
			const { lat, lng } = this.state.currentLocation;
			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign(
				{},
				{
					center: center,
					zoom: zoom
				}
			);

			// maps.Map() is a constructor that instantiates the map
			this.map = new maps.Map(node, mapConfig);
		}
	}

	// Will be responsible for actually calling the method on the 
	//   child component
	renderChildren() {
		const { children } = this.props;
		if (!children) return;

		return React.Children.map(children, c => {
			if (!c) return;
			return React.cloneElement(c, {
				map: this.map,
				google: this.props.google,
				mapCenter: this.state.currentLocation
			});
		});
	}

	render() {
		const style = Object.assign({}, mapStyles.map);
		return (
			<div>
				<div style={style} ref="map">
					Loading map...
				</div>
				{this.renderChildren()}
			</div>
		);
	}
}

// Set the default props for CurrentLocation
// Want to have a fairly zoomed-in focus of CMU campus, hence 
//   the zoom and initialCenter values
CurrentLocation.defaultProps = {
	zoom: 18,
	initialCenter: {
		lat: 40.4416,
		lng: -79.9413
	},
	centerAroundCurrentLocation: true,
	visible: true
};


// MapContainer wraps the CurrentLocation and some text fields representing 
//  the current location (updates as the map Marker is dragged)
export class MapContainer extends Component {
	// The MapContainer keeps track of the marker, location, and some displayed text
	state = {
		showingInfoWindow: false, // Hides or shows the infoWindow
		activeMarker: {}, // Shows the active marker upon click
		selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
		mostRecentLat: " ",
		mostRecentLng: " ",
		displayedText: "Use current location, or drag pin below",
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	determineText() {
		if (this.state.mostRecentLat === " " || this.state.mostRecentLng === " ") {
			return "--";
		} else {
			return "(" + this.state.mostRecentLat + ", " + this.state.mostRecentLng + ")";
		}
	}

	updateLocation = (props, marker, e) => {
		var temp = marker.getPosition();
		var newLat = temp.lat();
		var newLng = temp.lng();
		// var newText = "Your selected location is:\n" +
		// 	newLat + ", " + newLng;
		Geocode.setApiKey('AIzaSyAns2uECS5cjVGMh7CuTw5HuVsqluYGc48');
		Geocode.fromLatLng(newLat, newLng).then(
			response => {
				const address = response.results[0].formatted_address;
				this.props.handleAdrChange('adr')(address)
				this.props.handleAdrChange('lat')(newLat)
				this.props.handleAdrChange('lng')(newLng)


				this.setState({
					displayedText: address
				})
			},
			error => {
				alert(error);
			}
		);
		this.setState({
			mostRecentLat: newLat,
			mostRecentLng: newLng,
		})
	};

	// TODO: The Confirm Location button should route to the next screen 
	//   in the order process, instead of the home page
	render() {
		return (
			<div className="overall-div">
				<Link to='/cart' style={{ textDecoration: 'none' }}>
					<div className="button-div">
						<Button variant="contained">
							Confirm Location
						</Button>
					</div>
				</Link>

				<h1 className="map-text">{this.state.displayedText} </h1>
				{/* <h2 className="map-text">{this.determineText()} </h2> */}

				<CurrentLocation
					centerAroundCurrentLocation
					google={this.props.google}
				>

					<Marker

						onClick={this.onMarkerClick}
						draggable={true}
						onDragend={this.updateLocation}
						name={'Current location'}
					/>

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					>

						<div>
							<h4>{this.state.selectedPlace.name}</h4>
						</div>

					</InfoWindow>
				</CurrentLocation>
				<Footer />

			</div>
		);
	}
}

// API Key from Joyce's Google Cloud Platform trial - pls don't abuse
export default GoogleApiWrapper({
	apiKey: 'AIzaSyAns2uECS5cjVGMh7CuTw5HuVsqluYGc48'
})(MapContainer);