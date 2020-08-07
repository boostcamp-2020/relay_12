import React, { useState } from "react";
import Form from "../components/Forms/Form";
import { withRouter } from "react-router-dom";
import { updatePost } from "../lib/api";


const UpdatePage = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, body);
    updatePost(0, title, body);  // postId 는 현재 임의의 값입니다.
    props.history.push('/');
  };

  return(
    <Form
      type="UPDATE"
      setTitle={setTitle}
      setBody={setBody}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(UpdatePage);
