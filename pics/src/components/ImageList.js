import React from "react";
import Image from "./Image";

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((img) => (
        <div>
          <Image
            key={img.id}
            image={img.urls.regular}
            alt={img.alt_description}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
