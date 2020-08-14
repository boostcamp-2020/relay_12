import React from "react";
import { withRouter } from "react-router-dom";
import ImageUploader from "../components/ImageUploader/ImageUploader";
import Button from "../components/Buttons/Button";

const UploadImagePage = ({ history }) => {
  return (
    <>
      <ImageUploader />
      <Button style={("margin: 0 auto", "display: block")}>합성하기!</Button>
    </>
    // Button
  );
};

export default withRouter(UploadImagePage);
