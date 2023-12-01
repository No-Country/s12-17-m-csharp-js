'use client'
import React, { useState } from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const CombinedCarousel = ({ slides }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const slidesPerPage = 2;

  const totalPages = Math.ceil(slides.length / slidesPerPage);
  const carouselWidth = 100 * totalPages; // Ancho total del carrusel en porcentaje
  const slideWidth = 100 / (totalPages * slidesPerPage); // Ancho relativo de cada imagen

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = currentPage * slidesPerPage;
  const endIndex = Math.min(startIndex + slidesPerPage, slides.length);
  const visibleSlides = slides.slice(startIndex, endIndex);

  return (
    <div className='overflow-hidden relative'>
      <div className='mx-auto' style={{ width: `${carouselWidth}%` }}>
        {visibleSlides.map((slide, index) => (
          <div
            key={index}
            className='p-4'
            style={{
              width: `${slideWidth}%`, // Ancho relativo de cada imagen
              float: 'left',
            }}
          >
            <img src={slide} alt={`Slide ${index}`} className='w-full' />
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

      <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index)}
            className={`mx-2 w-3 h-3 rounded-full border border-gray-400 focus:outline-none focus:border-gray-600 ${
              index === currentPage ? 'bg-gray-800' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CombinedCarousel;