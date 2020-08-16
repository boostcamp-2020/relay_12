import React from "react";
import "./ImageUploader.css";

const ResultImage = ({ desc, label, imageSrc }) => {
  return (
    <div>
      <div className="image-result-label">
        {imageSrc ? (
          <img className="img-preview" alt={"image-" + label} src={imageSrc} />
        ) : (
          <></>
        )}
      </div>
      <div className="image-desc">
        {imageSrc ? desc : "얼굴 정면이 나온 사진을 올려주세요!"}
      </div>
    </div>
  );
};

export default ResultImage;
