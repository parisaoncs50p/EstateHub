
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function PropertyGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* عکس اصلی */}
      <div
        className="overflow-hidden rounded-3xl shadow-xl cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={images[selectedImage]}
          alt="Property"
          className="h-[520px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* تصاویر کوچک */}
      <div className="mt-5 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`overflow-hidden rounded-2xl border-4 transition-all duration-300 ${
              selectedImage === index
                ? "border-amber-500"
                : "border-transparent hover:border-slate-300"
            }`}
          >
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className="h-28 w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
     <Lightbox
  open={open}
  close={() => setOpen(false)}
  index={selectedImage}
  slides={images.map((image) => ({
    src: image,
  }))}
  plugins={[Zoom]}
/>
    </>
  );
}

export default PropertyGallery;