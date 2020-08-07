import React from "react";
import './style.css';
const PostItem = ({ post  }) => {

    return (
          <li key={post.postId} className="list_item">
             <span> {post.postId}</span>
           <span>{post.title}</span>
           <span> {post.username}</span>
          </li>
    );
  };
  
export default PostItem;