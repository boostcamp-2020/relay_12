import React from "react";
import "./ImageUploader.css";
import { useState } from "react";

const ImageUploader = ({ desc, label, addImageFile }) => {
  const [imagePreview, setimagePreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setimagePreview(URL.createObjectURL(file));
    addImageFile(file);
  };

  return (
    <div>
      <label className="image-label" htmlFor={label}>
        {imagePreview ? <></> : <div className="plus-button">+</div>}
        <input
          className="image-uploader"
          type="file"
          name={"image-" + label}
          id={label}
          onChange={(e) => handleChange(e)}
        />
        {imagePreview ? (
          <img
            className="img-preview"
            alt={"image-" + label}
            src={imagePreview}
          />
        ) : (
          <></>
        )}
      </label>
      <div className="image-desc">{desc}</div>
    </div>
  );
};

export default ImageUploader;
