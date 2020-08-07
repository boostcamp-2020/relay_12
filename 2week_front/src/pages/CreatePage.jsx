import React, { useState } from "react";
import Form from "../components/Forms/Form";
import { withRouter } from 'react-router-dom';
import { addPost } from "../lib/api";


const CreatePage = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, body);
    addPost(title, body);
    props.history.push("/");
  };

  return (
    <Form
      type="CREATE"
      setTitle={setTitle}
      setBody={setBody}
      handleSubmit={handleSubmit}
    />
  );
}

export default withRouter(CreatePage);
