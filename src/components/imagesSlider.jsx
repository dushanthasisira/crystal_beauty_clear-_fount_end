import { useState } from "react";

export default function ImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] max-w-lg aspect-square relative mx-auto">
        {/* Main Image */}
        <img
          src={activeImage}
          alt="Product"
          className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300"
        />

        {/* Thumbnails Carousel at Bottom */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <div className="flex overflow-x-auto space-x-3 py-2 bg-black/20 backdrop-blur-sm rounded-xl">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setActiveImage(image)}
                className={`
                  h-16 w-16 object-cover rounded-md cursor-pointer 
                  border-2 transition-all duration-300 transform
                  ${
                    activeImage === image
                      ? "border-pink-500 scale-110 shadow-lg"
                      : "border-transparent hover:border-pink-300 hover:scale-105"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}