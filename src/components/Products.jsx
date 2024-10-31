import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      producerId: 1,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      name: 'Lechuga Fresca',
      price: 2500
    },
    {
      id: 2,
      producerId: 1,
      image: 'https://images.unsplash.com/photo-1566842600175-97dca489844f?auto=format&fit=crop&w=800&q=80',
      name: 'Espinacas Orgánicas',
      price: 3000
    },
    {
      id: 3,
      producerId: 2,
      image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80',
      name: 'Acelgas Frescas',
      price: 2800
    },
    {
      id: 4,
      producerId: 2,
      image: 'https://images.unsplash.com/photo-1628773822503-93b745b1000c?auto=format&fit=crop&w=800&q=80',
      name: 'Col Rizada',
      price: 3500
    }
  ];

  return (
    <section className="py-12" id="productos">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Mis Productos</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="px-4">
            <Link to={`/producer/${product.producerId}`} className="block">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-green-700">{product.name}</h3>
                  <p className="text-gray-600 mt-1">$ {product.price.toLocaleString()}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Products;