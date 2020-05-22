import React,{Component} from 'react';
//import './hospital';
import './hospital.styles.scss';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    margin:'auto',
    height: '600px',
    position:'relative'
  };
  
  export class Hospital extends Component {
    render() {
      return (
        <div className='section-map'>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: -1.2884,
           lng: 36.8233
          }}
        />
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCM8G-LdEehpSW6VtNjhXRhBa8_vjfQav8'
  })(Hospital);