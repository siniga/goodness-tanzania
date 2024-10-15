import React from 'react'
import Header from '../../components/Header/Header'
import PageHeader from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
    lat: -6.769887,  
    lng: 39.262507
  };

  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  
  const MapComponent = () => {
    return (
      <LoadScript googleMapsApiKey="AIzaSyA_B-qolW1H25WQaB3k3CPGPUnq8n3M46U">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  }

function ContactScreen() {
  return (
    <div>
      <Header />
      <PageHeader header={"CONTACT US"} />
      <MapComponent />
     <Footer />
    </div>
  )
}

export default ContactScreen