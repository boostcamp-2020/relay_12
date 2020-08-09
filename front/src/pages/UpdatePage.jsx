import React, { useState } from 'react';
import Form from '../components/Forms/Form';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../lib/api';

const UpdatePage = ({ history, location, match }) => {
  const [title, setTitle] = useState(location.state.title);
  const [body, setBody] = useState(location.state.body);
  const { postId } = match.params;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(postId, title, body);
      history.replace(`/posts/${postId}`);
      history.goBack();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
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
