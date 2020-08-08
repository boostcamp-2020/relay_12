import React from 'react';
import PostItem from './PostItem';
import { withRouter } from 'react-router-dom';
import './style.css';
const Posts = ({ posts, history }) => {
  const makeLink = (post) => () => {
    history.push(`/posts/${post.postId}`, [{ data: post }]);
  };

  return (
    <>
      {posts.map((post) => (
        <tr key={post.postId} className="post_list" onClick={makeLink(post)}>
          <PostItem post={post} />
        </tr>
      ))}
    </>
  );
};

export default withRouter(Posts);
