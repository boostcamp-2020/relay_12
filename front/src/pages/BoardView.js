import React, { useState, useEffect } from 'react';
import Board from '../components/BoardView/Board';
import { getPostById } from '../lib/api';

const BoardView = ({ location, match }) => {
  const [post, setPost] = useState({});
  const { postId } = match.params;

  useEffect(() => {
    const fetchPost = () => {
      getPostById(postId)
        .then((res) => setPost(res.data))
        .catch((err) => console.error(err));
    };
    fetchPost();
  }, [postId]);

  return (
    <Board
      key={post.postId}
      postId={post.postId}
      title={post.title}
      body={post.body}
      username={post.username}
      createdAt={post.createdAt}
      isChat={post.isChat}
    />
  );
};

export default BoardView;
