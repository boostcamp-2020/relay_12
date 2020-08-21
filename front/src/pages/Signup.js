import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [id, setId] = useState(""); // id
  const [password, setPassword] = useState(""); // pw
  const [school, setSchool] = useState(""); // school
  const [hobby, setHobby] = useState("선택"); // interests

  const setNameText = e => {
    setName(e.target.value);
  };
  const setIdText = e => {
    setId(e.target.value);
  };

  const setPasswordText = e => {
    setPassword(e.target.value);
  };
  const setSchoolText = e => {
    setSchool(e.target.value);
  };
  const setHobbyText = e => {
    setHobby(e.target.value);
  };
  const handlePost = (e) => {
    console.log()
    console.log('e');
    console.log(e.target.id.value);
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", e.target.id.value);
    formData.append("password", e.target.password.value);
    formData.append("name", e.target.name.value);
    formData.append("school", e.target.school.value);
    formData.append("hobby", e.target.hobby.value);
    console.log('form data')
    console.log(formData);
    axios
      // post 링크를 수정해주세요.
      .post("http://localhost:4000/upload", formData)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <div className="App">
        <form onSubmit={handlePost}>
          <FormLabel htmlFor="name">이름</FormLabel>
          <Input
            name="name"
            id="name"
            placeholder="홍길동"
            onChange={setNameText}
          />
          <br />
          <FormLabel htmlFor="id">아이디</FormLabel>
          <Input
            name="id"
            id="id"
            placeholder="choigangZeeZone"
            onChange={setIdText}
            value={id}
          />
          <br />
          <FormLabel htmlFor="password">비밀번호</FormLabel>
          <Input
            name="password"
            id="password"
            placeholder="********"
            onChange={setPasswordText}
            value={password}
          />
          <br />
          <FormLabel htmlFor="school">학교</FormLabel>
          <Input
            name="school"
            id="school"
            placeholder="부캠어린이집"
            onChange={setSchoolText}
          />
          <br />
          <FormLabel htmlFor="hobby">취미</FormLabel>
          <NativeSelect id="hobby" name="hobby" onChange={setHobbyText}>
            <option value={hobby}>선택</option>
            <option value="soccer">축구</option>
            <option value="music">음악 감상</option>
            <option value="movie">영화 감상</option>
          </NativeSelect>
          <br />
          <Input type="submit" value="저장"/>
        </form>
        <div>
        </div>
      </div>
    </>
  );
};

export default Signup; 