import React from "react";
import "./ImageUploader.css";
import { useState } from "react";
const ImageUploader = () => {
  const [imageFile, setImageFile] = useState(null);
  return (
    <div className="image-uploader-container">
      <div>
        <label className="image-label" htmlFor="image">
          <div className="plus-button">+</div>
          <input
            className="image-uploader"
            type="file"
            name="image"
            id="image"
            onChange={null}
          />
          <img alt="image1" src={imageFile} />
        </label>
        <div className="image-desc">&lt;풋풋&gt;</div>
      </div>
      <div>
        <label className="image-label" htmlFor="image">
          <div className="plus-button">+</div>
          <input
            className="image-uploader"
            type="file"
            name="image"
            id="image"
            onChange={null}
          />
        </label>
        <div className="image-desc">&lt;늙음&gt;</div>
      </div>
    </div>
  );
};

export default ImageUploader;
