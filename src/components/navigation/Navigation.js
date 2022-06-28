import React from "react";
// import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import styled from "styled-components";
import Search from "../SearchBox";
// import { render } from "@testing-library/react";

export default function Navigation() {
  const pages = [
    {
      item: "Accessibilité",
      slug: "/",
      id: 1,
    },
    {
      item: "Theme",
      slug: "/theme",
      id: 2,
    },
    {
      item: "Boîte à outils",
      slug: "/toolbox",
      id: 3,
    },
  ];

  return (
    <WrapperNavigation>
      <div>
        <img src="3.svg" alt="République française" />
        <img src="logo.svg" alt="Code du travail numérique" />
      </div>
      <Search />
      <img src="bars-solid.svg" alt="menu" />
      <ul>
        {pages.map((page) => (
          <NavItems slug={page.slug} key={page.id} page={page.item} />
        ))}
      </ul>
    </WrapperNavigation>
  );
}
const WrapperNavigation = styled.header`
  display: flex;
  justify-content: space-between;
  height: 5em;
  div {
    height: 100%;
    margin: 0 1rem;
  }
  div img {
    height: 100%;
  }
`;
