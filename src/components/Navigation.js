import React from "react";
import { Link } from "react-router-dom";
import NavigationItems from "./NavigationItems";
import { ReactComponent as Ico3 } from "../img/3.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import styled from "styled-components";

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
        <Link to="/">
          <Ico3 />
        </Link>
        <Logo />
      </div>
    </WrapperNavigation>
  );
}
const WrapperNavigation = styled.header``;
