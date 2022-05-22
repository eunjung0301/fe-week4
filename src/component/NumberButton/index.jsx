import React from "react";
import styled from "styled-components";

const NumberButton = (props) => {
  return (
    <button
      onClick={() => {
        props.addToInput(props.num);
      }}
    >
      {props.num}
    </button>
  );
};

export default NumberButton;
