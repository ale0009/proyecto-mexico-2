import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
  const { isAdmin } = useSelector(state => state.auth);
  const [activeTab, setActiveTab] = useState('producers');

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold text-green-800 mb-6">Panel de Administración</h1>
      
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setActiveTab('producers')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'producers'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Productores
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'products'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Productos
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'producers' ? (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Lista de Productores</h2>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Agregar Productor
            </button>
          </div>
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Nombre</th>
                <th className="text-left py-3">Email</th>
                <th className="text-left py-3">Teléfono</th>
                <th className="text-left py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">David Rincón</td>
                <td className="py-3">david@example.com</td>
                <td className="py-3">+57 123 456 7890</td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Editar</button>
                  <button className="text-red-600 hover:text-red-800">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Lista de Productos</h2>
            <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Agregar Producto
            </button>
          </div>
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Producto</th>
                <th className="text-left py-3">Productor</th>
                <th className="text-left py-3">Precio</th>
                <th className="text-left py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Lechuga Fresca</td>
                <td className="py-3">David Rincón</td>
                <td className="py-3">$2,500</td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">Editar</button>
                  <button className="text-red-600 hover:text-red-800">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;