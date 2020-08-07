import React, { useState, useEffect } from "react";
import Form from "../components/Forms/Form";
import { withRouter } from "react-router-dom";
import { updatePost } from "../lib/api";


const UpdatePage = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(0, title, body);  // postId 는 현재 임의의 값입니다.
      props.history.push('/');
    } catch(err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const { title, body } = props.location.state;
    setTitle(title);
    setBody(body);
  }, []);
  

  console.log(props.location.state);

  return(
    <Form
      type="UPDATE"
      title={title}
      body={body}
      setTitle={setTitle}
      setBody={setBody}
      handleSubmit={handleSubmit}
    />
  );
};

export default withRouter(UpdatePage);
