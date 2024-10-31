import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaEnvelope, FaLeaf, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const user = useSelector(state => state.auth.user);
  const isAdmin = useSelector(state => state.auth.isAdmin);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <FaLeaf className="h-12 w-12 text-green-700" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-green-700 hover:text-green-900">Productos</Link>
            <Link to="/" className="text-green-700 hover:text-green-900">Perfil</Link>
            <Link to="/" className="text-green-700 hover:text-green-900">Ubicación</Link>
            <a href="mailto:ContactoGranjaLocal@gmail.com" className="flex items-center text-green-700 hover:text-green-900">
              <FaEnvelope className="mr-2" />
              ContactoGranjaLocal@gmail.com
            </a>
            <Link to="/cart" className="text-green-700 hover:text-green-900 relative">
              <FaShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin" className="text-green-700 hover:text-green-900">
                    Admin
                  </Link>
                )}
                <Link to="/profile" className="text-green-700 hover:text-green-900">
                  <FaUser className="h-6 w-6" />
                </Link>
              </>
            ) : (
              <Link to="/login" className="text-green-700 hover:text-green-900">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;