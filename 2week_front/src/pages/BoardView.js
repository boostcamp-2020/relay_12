import React, { useState, useEffect } from 'react';
import Board from '../components/BoardView/Board';
import { getPostById } from '../lib/api';

const b = {
  postId: '1',
  title: '제목',
  body: '글 내용',
  username: '유저이름',
  createdAt: '작성날짜',
  isChat: '잡담여부',
};

const BoardView = ({location}) =>  {
    
    //게시글 데이터
    console.log('location',location.state.data)

        return (
            <div>
                { boardView.map( b => {
                    return (
                        <Board
                            key={b.postId}
                            postId = {b.postId}
                            title = {b.title}
                            body = {b.body}
                            username = {b.username}
                            createdAt = {b.createdAt}
                            isChat = {b.isChat}
                        />
                    )
                })}
            </div>
        )
}


  useEffect(() => {
    const fetchPost = () => {
      getPostById(match.params.postId)
        .then((res) => setPost(res.data))
        .catch((err) => console.error(err));
    };
    fetchPost();
  }, []);

  return (
    <Board
      // 테스트용 b 객체 이용
      key={b.postId}
      postId={b.postId}
      title={b.title}
      body={b.body}
      username={b.username}
      createdAt={b.createdAt}
      isChat={b.isChat}
    />
  );
};

export default BoardView;
