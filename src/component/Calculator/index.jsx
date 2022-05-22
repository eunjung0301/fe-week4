import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Viewer from "../Viewer";

const CalculatorWrapper = styled.div`
  width: 500px;
  height: 750px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-top: 40px;
`;
const Button = styled.button`
  font-weight: 400;
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 20px;
  line-height: 1.5;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  color: ${(props) => (props.color ? props.color : "black")};
  border-color: ${(props) => (props.borderColor ? props.borderColor : "black")};
`;

const Calculator = () => {
  const [number, setNumber] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");

  const onClickButton = (e) => {
    setNumber(number + e.target.value);
  };
  const onClickOperation = (e) => {
    setPreviousValue(number);
    setNumber("");
    setOperation(e.target.value);
  };

  const onClickReset = (e) => {
    setNumber("");
    setOperation("");
    setPreviousValue("");
  };

  const onClickEqual = () => {
    if (operation === "+") {
      setNumber(parseInt(previousValue) + parseInt(number));
    } else if (operation === "-") {
      setNumber(parseInt(previousValue) - parseInt(number));
    } else if (operation === "/") {
      setNumber(parseInt(previousValue) / parseInt(number));
    } else if (operation === "x") {
      setNumber(parseInt(previousValue) * parseInt(number));
    }
  };

  return (
    <CalculatorWrapper>
      <Viewer>{number}</Viewer>
      <ButtonWrapper>
        <Button onClick={onClickButton} value={7}>
          7
        </Button>
        <Button onClick={onClickButton} value={8}>
          8
        </Button>
        <Button onClick={onClickButton} value={9}>
          9
        </Button>
        <Button onClick={onClickOperation} value={"/"}>
          /
        </Button>
        <Button onClick={onClickButton} value={4}>
          4
        </Button>
        <Button onClick={onClickButton} value={5}>
          5
        </Button>
        <Button onClick={onClickButton} value={6}>
          6
        </Button>
        <Button onClick={onClickOperation} value={"x"}>
          x
        </Button>
        <Button onClick={onClickButton} value={1}>
          1
        </Button>
        <Button onClick={onClickButton} value={2}>
          2
        </Button>
        <Button onClick={onClickButton} value={3}>
          3
        </Button>
        <Button onClick={onClickOperation} value={"-"}>
          -
        </Button>
        <Button onClick={onClickReset} value={"@"}>
          @
        </Button>
        <Button onClick={onClickButton} value={0}>
          0
        </Button>
        <Button onClick={onClickOperation} value={"+"}>
          +
        </Button>
        <Button onClick={onClickEqual} value={"="}>
          =
        </Button>
      </ButtonWrapper>
    </CalculatorWrapper>
  );
};
export default Calculator;
