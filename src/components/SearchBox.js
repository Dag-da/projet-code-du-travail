import React from "react";
import styled from "styled-components";
// import Button from './Button'

export default function Search() {
  return (
    <WrapperInput>
      <label>Recherchez par mots-clés</label>
      <div>
        <input type="text" placeholder="congés payés, durée de préavis"></input>
        {/* <Button /> */}
      </div>
    </WrapperInput>
  );
}
const WrapperInput = styled.div`
  label {
    font-weight: 700;
  }
  div {
    margin-top: 1em;
  }
  input {
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    padding: .5rem 1rem;
  }
`;
