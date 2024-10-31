import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
  const [mapError, setMapError] = useState(false);
  
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 4.570868,
    lng: -74.297333
  };

  const MapComponent = () => {
    if (mapError) {
      return (
        <div className="bg-white h-full flex items-center justify-center p-4 text-center">
          <div>
            <p className="text-gray-600 mb-2">Mapa no disponible en este momento</p>
            <a 
              href={`https://www.google.com/maps?q=${center.lat},${center.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 underline"
            >
              Ver ubicación en Google Maps
            </a>
          </div>
        </div>
      );
    }

    return (
      <LoadScript 
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onError={() => setMapError(true)}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <section className="py-12" id="ubicacion">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Mi Ubicación</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <MapComponent />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Contacto</h3>
          <div className="space-y-2">
            <p><strong>Teléfono:</strong> +57 123 456 7890</p>
            <p><strong>Correo:</strong> ContactoGranjaLocal@gmail.com</p>
            <p><strong>Dirección:</strong> Vereda El Charquito</p>
            <p><strong>Ciudad:</strong> Soacha, Cundinamarca</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;