import React from "react";
import styled from "styled-components";

export default function ({ categorie, title, text, id }) {
  return (
    <FeatureCard key={id}>
      <div>
      <div>
        <i></i>
      </div>
      <span>{categorie}</span>
      <h3>{title}</h3>
      <p>{text}</p></div>
    </FeatureCard>
  );
}
const FeatureCard = styled.div`
  padding: 1rem;
  background-color: #fff;
  /* width: 300px; */
  min-width: 270px;
  margin-right: 1.5rem;
  border-radius: 5px;
  height: 300px;
  text-align: left;
  box-shadow: -5px 10px 10px 1px #D0DEFD;
  div{
    white-space: normal;
  }
  span {
    text-transform: uppercase;
    /* font-size: .7em;
    font-weight: 700; */
    color: #4d73b8;
    font-family: 'Merriweather Sans', sans-serif;
  }
  h3 {
    font-size: 1.3rem;
    margin-top: 0.7em;
    margin-bottom: 0.7em;
  }
`;
