import React from "react";
import { ReactComponent as Bar } from "../img/bars-solid.svg";
import { Link } from "react-router-dom";

export default function NavigationItems({ slug, keY, page }) {
  return (
    <>
      <Bar />
      <ul>
        <Link to={slug} key={keY}>
          <li>{page}</li>
        </Link>
      </ul>
    </>
  );
}
