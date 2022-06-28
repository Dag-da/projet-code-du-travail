import React from "react";

export default function ThemeCard({ image, alt, title }) {
  return (
    <div>
      <div>
        <img src={image} alt={alt} />
      </div>
      <h3>${title}</h3>
    </div>
  );
}
