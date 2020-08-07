import React from "react";
import Form from "../components/Forms/Form";

const CreatePage = () => {
  const handleSubmit = () => {
    alert("새로운 글 작성!");
  };

  return <Form type="CREATE" handleSubmit={handleSubmit} />;
};

export default CreatePage;
