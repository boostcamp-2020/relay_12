import React, { useState, useEffect } from 'react';
import Form from '../components/Forms/Form';
import { withRouter } from 'react-router-dom';
import { updatePost } from '../lib/api';

const UpdatePage = ({ history, location, match }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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

  useEffect(() => {
    const { title, body } = location.state;
    setTitle(title);
    setBody(body);
  }, []);

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
