import React from "react";
import { Link } from "react-router-dom";

export default function Button({slug, call}) {
  return (
    <div>
      <Link to={slug}>
        <button>{call}</button>
      </Link>
    </div>
  );
}
