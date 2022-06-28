import React from "react";

export default function ({ categorie, title, text }) {
  return (
    <div>
      <div>
        <i></i>
      </div>
      <span>{categorie}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
