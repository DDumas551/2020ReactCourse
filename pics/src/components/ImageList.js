import React from "react";
import Image from "./Image";
import "./ImageList.css";

const ImageList = ({ images, removeItem }) => {
  return (
    <div className="image-list">
      {images.map((img) => (
        <div>
          <Image
            key={img.id}
            image={img.urls.regular}
            alt={img.alt_description}
          />
          {/* <button onClick={() => removeItem(img.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default ImageList;
