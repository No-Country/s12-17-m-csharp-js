"use client"
import React, { useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const CardCarousel = ({ cards }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
  
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const carouselWidth = 100 * totalPages; // Ancho total del carrusel en porcentaje
    const cardWidth = 100 / (totalPages * cardsPerPage); // Ancho relativo de cada tarjeta
  
    const handlePrevious = () => {
      setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };
  
    const handleNext = () => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };
  
    const startIndex = currentPage * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, cards.length);
    const visibleCards = cards.slice(startIndex, endIndex);
  
    return (
      <div className='overflow-hidden relative'>
        <div className='mx-auto' style={{ width: `${carouselWidth}%` }}>
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className='p-4'
              style={{
                width: `${cardWidth}%`, // Ancho relativo de cada tarjeta
                float: 'left',
              }}
            >
              {card && (
                <div className='bg-white rounded-lg shadow-md p-6'>
                  <img src={card.image} alt={card.title} className='w-full mb-4 rounded-md' />
                  <h2 className='text-xl font-semibold mb-2'>{card.title}</h2>
                  <p className='text-gray-600'>{card.description}</p>
                  <p className='text-primary font-bold'>{card.price}</p>
                  12x $49.499
                  <p className='text-green-500 font-bold'>Envío gratis</p>
                </div>
              )}
            </div>
          ))}
        </div>
  
        <div className='absolute top-0 h-full w-full justify-between items-center flex text-white text-3xl'>
          <button onClick={handlePrevious} className='rounded-full bg-white'>
            <CiCircleChevLeft className='text-primary' />
          </button>
          <button onClick={handleNext} className='rounded-full bg-white'>
            <CiCircleChevRight className='text-primary' />
          </button>
        </div>
      </div>
    );
  };
  
  export default CardCarousel;
  
  