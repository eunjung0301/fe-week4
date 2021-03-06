import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    console.log(e.target.value);
    setNickname(e.target.value);
  };

  const onReset = () => {
    setName("");
    setNickname("");
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChangeName}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChangeNickname}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        {" "}
        값 : {name !== "" ? name : "이름이 없습니다."} (
        {nickname !== "" ? nickname : "별명이 없습니다."})
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
