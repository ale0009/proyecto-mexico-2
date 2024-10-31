import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CONDICIONES</h3>
            <p className="text-sm">
              Al acceder y utilizar este sitio web, aceptas cumplir y estar sujeto a los términos y condiciones de uso.
              © Local Wealth Marketplace 2023.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">UBICACIÓN</h3>
            <p className="text-sm">
              Nuestra plataforma conecta productores locales con consumidores en toda la región.
              Vereda El Charquito, Soacha, Cundinamarca.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;