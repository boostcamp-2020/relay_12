import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";

const Signup = (props) => {
  const [name, setName] = useState();
  const [id, setId] = useState(""); // id
  const [password, setPassword] = useState(""); // pw
  const [school, setSchool] = useState(""); // school
  // const [hobby, setHobby] = useState([]); // interests

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
  const setHobby = e => {
    setHobby(e.target.value);
  };
  const handlePost = (e) => {
    console.log(e.target.hobby);
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
    let { history } = props;
    history.goBack();
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
          <FormLabel htmlFor="hobby">취미</FormLabel><br/>
          <input type="checkbox" id="soccer" name="hobby" value="축구"></input>
          <label for="hobby"> 축구 </label><br></br>
          <input type="checkbox" id="basketball" name="hobby" value="농구"></input>
          <label for="hobby"> 농구 </label><br></br>
          <input type="checkbox" id="baseball" name="hobby" value="야구"></input>
          <label for="hobby"> 야구 </label><br></br>
          <input type="checkbox" id="movie" name="hobby" value="영화"></input>
          <label for="hobby"> 영화 </label><br></br>
          <input type="checkbox" id="music" name="hobby" value="노래"></input>
          <label for="hobby"> 노래 </label><br></br>
          <input type="checkbox" id="drawing" name="hobby" value="그림"></input>
          <label for="hobby"> 그림 </label><br></br>
          <input type="checkbox" id="PC game" name="hobby" value="PC게임"></input>
          <label for="hobby"> PC게임 </label><br></br>
          <input type="checkbox" id="exhibition" name="hobby" value="전시회"></input>
          <label for="hobby"> 전시회 </label><br></br>
          <input type="checkbox" id="console" name="hobby" value="콘솔게임"></input>
          <label for="hobby"> 콘솔게임 </label><br></br>
          <input type="checkbox" id="hiphop" name="hobby" value="힙합"></input>
          <label for="hobby"> 힙합 </label><br></br>
          <input type="checkbox" id="groumet" name="hobby" value="맛집"></input>
          <label for="hobby"> 맛집 </label><br></br>
          <input type="checkbox" id="book" name="hobby" value="독서"></input>
          <label for="hobby"> 독서 </label><br></br>
          <input type="checkbox" id="studying" name="hobby" value="공부"></input>
          <label for="hobby"> 공부 </label><br></br>
          <input type="checkbox" id="dancing" name="hobby" value="춤"></input>
          <label for="hobby"> 춤 </label><br></br>
          <input type="checkbox" id="gym" name="hobby" value="헬스"></input>
          <label for="hobby"> 헬스 </label><br></br>
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