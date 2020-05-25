import React,{Component} from 'react';
import './hospital.styles.scss';
import { Map, GoogleApiWrapper , InfoWindow , Marker} from 'google-maps-react';


const mapStyles = {
    width: '100%',
    margin:'auto',
    height: '600px',
    position:'relative'
  };
  
  export class Hospital extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
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

    render() {
      return (
        <div className='section-map'>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233}}
          >
            <Marker
            onClick={this.onMarkerClick}
             name={'Kenyatta International Convention Centre'}
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
          </Map>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCM8G-LdEehpSW6VtNjhXRhBa8_vjfQav8'
  })(Hospital);




//   componentDidMount(){
//     var lat,longt;
//      navigator.geolocation.getCurrentPosition(async (position)=> {
//         lat= await position.coords.latitude;
//         longt= await position.coords.longitude;
//       });
//       console.log(lat,longt);

// }