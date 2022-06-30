import React from "react";
import styled from "styled-components";

export default function TitleSection({ title, subtitle }) {
  return (
    <WrapperTitle>
      <div className="decoration"></div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </WrapperTitle>
  );
}
const WrapperTitle = styled.div`
h2 {
  font-size: 1.8rem;
}
.decoration {
  background-color: #4d73b8;
  height: 3px;
  width: 7ch;
  border-radius: 3px;
  margin: 0 auto;
}
`;
