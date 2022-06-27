import React from "react";

import { Link } from "react-router-dom";

export default function NavigationItems({ slug, cle, page }) {
  return (
    <>
      <Link to={slug}>
        <li key={cle}>{page}</li>
      </Link>
    </>
  );
}
