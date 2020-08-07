import React from 'react';
import { deletePost } from '../../lib/api';
import { withRouter } from 'react-router-dom';
import './style.css';
import { FaChevronLeft } from 'react-icons/fa';

const Board = ({ title, username, createdAt, body, key, history }) => {
  const handleUpdate = () => {
    // 상세 정보 수정 페이지로 이동
    console.log('수정');
  };

  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      await deletePost(key);
    } catch (err) {
      console.error(err.message);
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
            <button onClick={handleUpdate}>수정</button>
            <button onClick={handleRemove}>삭제</button>
          </div>
        </div>
        <div className="info">
          <span>{username}</span>
          <span>{createdAt}</span>
        </div>

        <div className="board">
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(Board);
