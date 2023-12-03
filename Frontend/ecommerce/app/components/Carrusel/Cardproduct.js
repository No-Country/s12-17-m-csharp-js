"use client";
import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Image from "next/image";

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
    <div className="relative overflow-hidden">
      <div
        className="flex h-auto mx-auto"
        style={{ width: `${carouselWidth}%` }}
      >
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="p-4"
            style={{
              width: `${cardWidth}%`, // Ancho relativo de cada tarjeta
              float: "left",
            }}
          >
            {card && (
              <div className="flex flex-col justify-between h-full p-6 bg-white rounded-lg shadow-md">
                {/* Use Image component from Next.js to optimize images */}
                <span className="space-y-3">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width="600"
                    height="600"
                    className="w-full rounded-md"
                  />
                  <h2 className="text-xl font-semibold line-clamp-2">
                    {card.title}
                  </h2>
                  <p className="flex-1 text-gray-600 line-clamp-2">
                    {card.description}
                  </p>
                </span>
                <span className="mt-4 space-y-2">
                  <p className="text-2xl font-bold text-primary">
                    {card.price}
                  </p>
                  <p className="pt-2">12x $49.499</p>
                  <p className="font-bold text-green-500">Envío gratis</p>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute top-0 flex items-center justify-between w-full h-full text-3xl text-white">
        <button onClick={handlePrevious} className="bg-white rounded-full">
          <CiCircleChevLeft className="text-primary" />
        </button>
        <button onClick={handleNext} className="bg-white rounded-full">
          <CiCircleChevRight className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
