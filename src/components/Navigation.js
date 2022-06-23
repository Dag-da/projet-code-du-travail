import React from "react";
import { Link } from "react-router-dom";
import NavigationItems from "./NavigationItems";
import { ReactComponent as Ico3 } from "../img/3.svg";

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
    <header>
      <Link to="/">
        <div></div>
      </Link>

      <img src="logo.svg" alt="Code du travail numérique" />
      <NavigationItems />
    </header>
  );
}
