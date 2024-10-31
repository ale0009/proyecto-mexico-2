import React from 'react';

const Profile = () => {
  return (
    <section className="text-center py-12">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
          <img
            src="/profile-image.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-green-800">David Rincón • Prueba Nombre</h1>
        <p className="text-green-600">Productor de hoja</p>
      </div>
    </section>
  );
};

export default Profile;