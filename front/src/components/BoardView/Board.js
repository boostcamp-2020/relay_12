import React from 'react';
import { deletePost } from '../../lib/api';
import { withRouter, Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import Moment from 'moment';
import './style.css';
import 'moment/locale/ko';

Moment.locale('ko');

const Board = ({ title, username, createdAt, body, key, history, postId }) => {
  const handleRemove = async () => {
    try {
      if (!window.confirm('삭제하시겠습니까?')) {
        return;
      }
      const res = await deletePost(postId);
      if (!res.success) {
        throw new Error(res.message);
      }
      history.push(`/`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="BoardView">
        <div className="board-header">
          <div className="title">
            <span onClick={history.goBack}>
              <FaChevronLeft />
            </span>
            <h2>{title}</h2>
          </div>
          <div className="btn-container">
            <Link
              to={{
                pathname: `/posts/update/${postId}`,
                state: {
                  title: title,
                  body: body,
                },
              }}
            >
              <button>수정</button>
            </Link>
            <button onClick={handleRemove}>삭제</button>
          </div>
        </div>
        <div className="info">
          <span>{username}</span>
          <span className="info-time">{Moment(new Date(createdAt)).fromNow()}</span>
        </div>

        <div className="board">
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Board);
