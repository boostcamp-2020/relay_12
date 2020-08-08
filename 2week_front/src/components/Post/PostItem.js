import React from 'react';
import './style.css';
const PostItem = ({ post }) => {
  return (
    <>
      <td className="list_item">{post.postId}</td>
      <td className="list_item">{post.title}</td>
      <td className="list_item">{post.username}</td>
    </>
  );
};

export default PostItem;
