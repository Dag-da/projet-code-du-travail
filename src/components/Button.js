import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ call }) {
  return (
    <Link to="/">
      <ButtonWrapper>
        <div>
          <span>Hello world</span> <img src="ico10white.svg" alt="arrow" />
        </div>
      </ButtonWrapper>
    </Link>
  );
}
const ButtonWrapper = styled.button`
  background: #f66668;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  color: #fff;
  box-shadow: 0 2px 10px #f66668;
  border-radius: 5px;
  font-weight: 300;
  width: 100%;
  img {
    width: 2em;
    margin-left: 1em;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`;
