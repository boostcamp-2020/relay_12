import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ImageUploader from "../components/ImageUploader/ImageUploader";
import ResultImage from "../components/ImageUploader/ResultImage";
import axios from "axios";

const UploadImagePage = ({ history }) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [resultImage, setResultImage] = useState("");

  const addImageFile = (imageFile) => {
    setImageFiles([...imageFiles, imageFile]);
    console.log(imageFiles);
  };

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("before", imageFiles[0]);
    formData.append("after", imageFiles[1]);
    console.log(formData);
    axios
      // post 링크를 수정해주세요.
      .post("http://relay12-ammjb.run.goorm.io/upload", formData)
      .then((res) => {
        console.log(res.data);
        // response로 오는 값들 중 이미지 경로를 setResultImage()안의 인자로 넣어주시면 됩니다.
        setResultImage(res.data);
      });
  };

  return (
    <>
      <ResultImage desc="짜잔" label="result" imageSrc={resultImage} />
      <div className="image-uploader-container">
        <ImageUploader desc="풋풋" label="before" addImageFile={addImageFile} />
        <ImageUploader desc="늙음" label="after" addImageFile={addImageFile} />
      </div>
      <button className="syn-button" onClick={handlePost}>
        합성하기!
      </button>
    </>
  );
};

export default withRouter(UploadImagePage);
