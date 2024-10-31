import React from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ProducerProfile = () => {
  const { id } = useParams();
  
  // This would normally come from your backend/database
  const producer = {
    name: "Granja Orgánica El Charquito",
    legalRep: "David Rincón",
    mission: "Proporcionar productos agrícolas orgánicos de la más alta calidad mientras preservamos el medio ambiente y apoyamos a la comunidad local.",
    vision: "Ser líderes en la producción y distribución de productos orgánicos en la región, promoviendo prácticas agrícolas sostenibles.",
    schedule: "Lunes a Sábado: 7:00 AM - 5:00 PM",
    location: {
      address: "Vereda El Charquito, Soacha, Cundinamarca",
      coords: { lat: 4.570868, lng: -74.297333 }
    },
    businessType: "Producción y venta de productos agrícolas orgánicos",
    orgType: "Empresa Familiar",
    products: [
      {
        id: 1,
        name: "Lechuga Fresca",
        price: 2500,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        description: "Lechuga orgánica cultivada sin pesticidas"
      },
      // Add more products...
    ],
    contact: {
      phone: "+57 123 456 7890",
      email: "ContactoGranjaLocal@gmail.com"
    },
    social: {
      facebook: "granjaorganica",
      instagram: "granjaorganica",
      twitter: "granjaorganica",
      whatsapp: "573123456789"
    },
    history: "Fundada en 2010, nuestra granja comenzó como un pequeño proyecto familiar..."
  };

  const mapContainerStyle = {
    width: '100%',
    height: '300px'
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">{producer.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Información General</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p><strong>Representante Legal:</strong> {producer.legalRep}</p>
              <p><strong>Horario:</strong> {producer.schedule}</p>
              <p><strong>Tipo de Negocio:</strong> {producer.businessType}</p>
              <p><strong>Organización:</strong> {producer.orgType}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">Contacto</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p><strong>Teléfono:</strong> {producer.contact.phone}</p>
              <p><strong>Email:</strong> {producer.contact.email}</p>
              <div className="mt-4 flex space-x-4">
                <a href={`https://facebook.com/${producer.social.facebook}`} className="text-blue-600 hover:text-blue-800">
                  <FaFacebook size={24} />
                </a>
                <a href={`https://instagram.com/${producer.social.instagram}`} className="text-pink-600 hover:text-pink-800">
                  <FaInstagram size={24} />
                </a>
                <a href={`https://twitter.com/${producer.social.twitter}`} className="text-blue-400 hover:text-blue-600">
                  <FaTwitter size={24} />
                </a>
                <a href={`https://wa.me/${producer.social.whatsapp}`} className="text-green-600 hover:text-green-800">
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Misión y Visión</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Misión</h3>
              <p>{producer.mission}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visión</h3>
              <p>{producer.vision}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Productos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {producer.products.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-green-700 font-semibold mt-2">$ {product.price.toLocaleString()}</p>
                  <button className="mt-2 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition-colors">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Ubicación</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={producer.location.coords}
                zoom={15}
              >
                <Marker position={producer.location.coords} />
              </GoogleMap>
            </LoadScript>
            <div className="p-4">
              <p>{producer.location.address}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Reseña Histórica</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p>{producer.history}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProducerProfile;