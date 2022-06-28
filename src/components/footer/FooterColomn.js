import React from "react";
import FooterList from "./FooterList";

export default function FooterColomn({ title, datas }) {

  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {datas.map((data) => (
          <FooterList  slug={data.slug} key={data.id} page={data.item} />
        ))}
      </ul>
    </div>
  );
}
