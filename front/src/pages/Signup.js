import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormLabel from "@material-ui/core/FormLabel";

const Signup = () => {
  const [name, setName] = useState();
  const [jumin, setJumin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [marry, setMarry] = useState(false);
  const [hobby, setHobby] = useState("선택");
  const [date, setDate] = useState();

  const setNameText = e => {
    setName(e.target.value);
  };
  const setJuminText = e => {
    setJumin(e.target.value);
  };

  const setPhoneNumberText = e => {
    setPhoneNumber(e.target.value);
  };
  const setMarryText = e => {
    setMarry(e.target.value);
  };
  const setHobbyText = e => {
    setHobby(e.target.value);
  };
  const setDateText = e => {
    setDate(e.target.value);
  };
  const save = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className="App">
        <form onSubmit={save}>
          <FormLabel htmlFor="name">이름</FormLabel>
          <Input
            name="name"
            id="name"
            placeholder="홍길동"
            onChange={setNameText}
          />
          <br />
          <FormLabel htmlFor="jumin">주민번호</FormLabel>
          <Input
            name="jumin"
            id="jumin"
            placeholder="95xxxx-1xxxxxx"
            onChange={setJuminText}
            value={jumin}
          />
          <br />
          <FormLabel htmlFor="phoneNumber">휴대폰 번호</FormLabel>
          <Input
            name="phoneNumber"
            id="phoneNumber"
            placeholder="010-1234-5678"
            onChange={setPhoneNumberText}
            value={phoneNumber}
          />
          <br />
          <FormLabel htmlFor="marry">결혼 유무</FormLabel>
          <Input
            name="marry"
            id="marry"
            placeholder="결혼 유무"
            onChange={setMarryText}
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
          <Input type="date" name="date" onChange={setDateText} />
          <br />
          <Input type="submit" value="저장" />
        </form>
        <div>
          {name}
          <br />
          {jumin}
          <br />
          {phoneNumber}
          <br />
          {marry}
          <br />
          {hobby}
          <br />
          {date}
        </div>
      </div>
    </>
  );
};

export default Signup;