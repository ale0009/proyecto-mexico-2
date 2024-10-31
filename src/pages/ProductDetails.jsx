import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Mock product data - replace with actual data fetching
  const product = {
    id: parseInt(id),
    name: "Lechuga Fresca",
    price: 2500,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Lechuga orgánica cultivada sin pesticidas",
    producer: "David Rincón",
    details: "Nuestras lechugas son cultivadas utilizando métodos orgánicos tradicionales...",
    nutritionalInfo: {
      calories: "15 kcal",
      protein: "1.4g",
      carbs: "2.9g",
      fiber: "1.3g"
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">Productor: {product.producer}</p>
            <p className="text-2xl font-bold text-green-700 mb-4">
              $ {product.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors mb-6"
            >
              Agregar al Carrito
            </button>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Información Nutricional</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Calorías</p>
                  <p className="font-semibold">{product.nutritionalInfo.calories}</p>
                </div>
                <div>
                  <p className="text-gray-600">Proteínas</p>
                  <p className="font-semibold">{product.nutritionalInfo.protein}</p>
                </div>
                <div>
                  <p className="text-gray-600">Carbohidratos</p>
                  <p className="font-semibold">{product.nutritionalInfo.carbs}</p>
                </div>
                <div>
                  <p className="text-gray-600">Fibra</p>
                  <p className="font-semibold">{product.nutritionalInfo.fiber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Detalles del Producto</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;