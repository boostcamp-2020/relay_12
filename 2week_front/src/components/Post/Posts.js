import React from "react";
import PostItem from './PostItem'
import './style.css';
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="post_list">
      {posts.map((post) => (
        <PostItem post={post}/>
        // <li key={post.postId} className="list_item">
        //    <span> {post.postId}</span>
        //  <span>{post.title}</span>
        //  <span> {post.username}</span>
        // </li>
      ))}
    </ul>
  );
};

export default Posts;