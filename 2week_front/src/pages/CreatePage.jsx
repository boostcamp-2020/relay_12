import React, { useState } from 'react';
import Form from '../components/Forms/Form';
import { withRouter } from 'react-router-dom';
import { addPost } from '../lib/api';

const CreatePage = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, body)
      .then((res) => {
        if (!res.success) {
          throw new Error(res.data.message);
        }
        props.history.replace(`/posts/${res.data.postId}`);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return <Form type="CREATE" setTitle={setTitle} setBody={setBody} handleSubmit={handleSubmit} />;
};

export default withRouter(CreatePage);
