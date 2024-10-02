import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    "https://tse3.mm.bing.net/th?id=OIP.qQaYM8SzEL3FCABDnxWtZgHaEh&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.9O0bALtaFnn8_3vxTa3NpQHaEP&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.eZ5LE5u-IFW8zhjV0aqVFQAAAA&pid=Api&P=0&h=180",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10">
      {/* Slider Images */}
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full rounded-lg transition duration-200"
        />
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-gray-700 transition"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-gray-700 transition"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Slider Dots */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
