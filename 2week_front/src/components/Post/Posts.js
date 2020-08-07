import React from "react";
import PostItem from './PostItem'
import { Link } from 'react-router-dom';
import './style.css';
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
 <>
      {posts.map((post) => (
        <Link key={post.postId} to={{pathname:'/posts/'+post.postId,state:{data:post}}}>
        <ul className="post_list">
          <PostItem post={post}/>
          </ul></Link>
      ))}
      </>
  );
};

export default Posts;