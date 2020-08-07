import React from 'react';
import './style.css';
const PostItem = ({ post }) => {
  return (
    <>
      <li className="list_item">{post.postId}</li>
      <li className="list_item seperator">|</li>
      <li className="list_item">{post.title}</li>
      <li className="list_item seperator">|</li>
      <li className="list_item">{post.username}</li>
    </>
  );
};

export default PostItem;
