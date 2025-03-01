import React, { useState } from 'react';

const ImageLightbox = ({ thumbnails }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      // Go to next image
      const currentIndex = thumbnails.indexOf(selectedImage);
      if (currentIndex < thumbnails.length - 1) {
        setSelectedImage(thumbnails[currentIndex + 1]);
      }
    } else if (e.key === 'ArrowLeft') {
      // Go to previous image
      const currentIndex = thumbnails.indexOf(selectedImage);
      if (currentIndex > 0) {
        setSelectedImage(thumbnails[currentIndex - 1]);
      }
    }
  };

  return (
    <div className="image-gallery">
      {/* Thumbnails grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {thumbnails.map((image, index) => (
          <div key={index} className="thumbnail-container cursor-pointer">
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto rounded-md transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(image)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl w-full mx-auto">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Current image */}
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto max-h-screen object-contain mx-auto"
            />
            
            {/* Navigation buttons */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
              {thumbnails.indexOf(selectedImage) > 0 && (
                <button
                  className="bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = thumbnails.indexOf(selectedImage);
                    setSelectedImage(thumbnails[currentIndex - 1]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {thumbnails.indexOf(selectedImage) < thumbnails.length - 1 && (
                <button
                  className="bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = thumbnails.indexOf(selectedImage);
                    setSelectedImage(thumbnails[currentIndex + 1]);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;