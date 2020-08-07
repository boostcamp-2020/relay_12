import React from 'react';
import Button from '../Buttons/Button';
import './style.css';

const Form = ({ type, setTitle, setBody, handleSubmit }) => {

  const renderTitle = () => {
    return type === 'CREATE' ? '게시글 작성' : '';
  };

  const renderButtonText = () => {
    return type === 'CREATE' ? '등록하기' : '수정 완료';
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="head">{renderTitle()}</div>

      <input
        placeholder="제목"
        className="title"
        type="text"
        onChange={handleTitleChange}
      />

      <textarea
        placeholder="글 내용을 작성헤주세요!"
        className="textarea"
        onChange={handleBodyChange}
      />

      <Button>{renderButtonText()}</Button>
    </form>
  );
};

export default Form;
