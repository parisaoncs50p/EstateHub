
import { useState } from "react";

function PropertyGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* عکس اصلی */}

      <div className="overflow-hidden rounded-3xl shadow-lg">
        <img
          src={selectedImage}
          alt=""
          className="h-[500px] w-full object-cover"
        />
      </div>

      {/* تصاویر کوچک */}

      <div className="mt-5 grid grid-cols-4 gap-4">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border-4 transition

            ${
              selectedImage === image
                ? "border-amber-500"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-28 w-full object-cover hover:scale-110 transition duration-300"
            />
          </button>

        ))}

      </div>
    </div>
  );
}

export default PropertyGallery;