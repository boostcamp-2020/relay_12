import React from 'react';
import Button from '../Buttons/Button';
import './style.css';

const Form = ({ type, title = null, body = null, setTitle, setBody, handleSubmit }) => {
  const renderButtonText = () => {
    return type === 'CREATE' ? '등록하기' : '수정 완료';
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={title}
        placeholder="제목을 입력해주세요."
        className="title"
        type="text"
        onChange={handleTitleChange}
      />
      <textarea
        value={body}
        placeholder="글 내용을 작성해주세요."
        className="textarea"
        onChange={handleBodyChange}
      />
      <Button>{renderButtonText()}</Button>
    </form>
  );
};

export default Form;
