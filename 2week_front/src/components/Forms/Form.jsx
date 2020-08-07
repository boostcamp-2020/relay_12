import React from 'react';
import Button from '../Buttons/Button';
import './style.css';
import { useState } from 'react';

const Form = ({ type, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const renderTitle = () => {
    return type === 'CREATE' ? '게시글 작성' : '';
  };

  const renderButtonText = () => {
    return type === 'CREATE' ? '등록하기' : '수정 완료';
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="head">{renderTitle()}</div>

      <input placeholder="제목" className="title" type="text" />

      <textarea placeholder="글 내용을 작성헤주세요!" className="textarea" />

      <Button>{renderButtonText()}</Button>
    </form>
  );
};

export default Form;
