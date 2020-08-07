import React from "react";
import './style.css';
const PostItem = ({ post  }) => {

    return (
          <li key={post.postId} className="list_item">
             <span className="list_item_text"> {post.postId}</span>
             <span className="list_item_text seperator"> |</span>
           <span className="list_item_text">{post.title}</span>
           <span className="list_item_text seperator"> |</span>
           <span className="list_item_text"> {post.username}</span>
          </li>
    );
  };
  
export default PostItem;