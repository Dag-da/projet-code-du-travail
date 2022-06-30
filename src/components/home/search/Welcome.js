import React from "react";
import SearchBox from "../../SearchBox";
import styled from "styled-components";
import Button from "../../Button";

export default function Welcome() {
  return (
    <WelcomeSection>
      <p>Bienvenue sur</p>
      <h1>le Code du travail numérique</h1>
      <p>Obtenez les réponses à vos questions sur le droit du travail.</p>
      <div className="search">
        <SearchBox />
        <Button />
      </div>
    </WelcomeSection>
  );
}
const WelcomeSection = styled.div`
  color: #2f3b6c;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1em;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    /* font-size: 2.8rem; */
  }
  .search {
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .search  {
  }
  
`;
