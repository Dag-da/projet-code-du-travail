import React from "react";
import styled from "styled-components";
// import FooterColomn from "./FooterColomn";

export default function Footer() {
  const datas = [
    {
      title: "title 1",
      links: [
        {
          slug: "/",
          id: 1,
          item: "lien a",
        },
        {
          slug: "/",
          id: 2,
          item: "lien b",
        },
        {
          slug: "/",
          id: 3,
          item: "lien c",
        },
        {
          slug: "/",
          id: 4,
          item: "lien d",
        },
      ],
    },
    {
      title: "title 2",
      links: [
        {
          slug: "/",
          id: 1,
          item: "lien a",
        },
        {
          slug: "/",
          id: 2,
          item: "lien b",
        },
        {
          slug: "/",
          id: 3,
          item: "lien c",
        },
        {
          slug: "/",
          id: 4,
          item: "lien d",
        },
      ],
    },
    {
      title: "title 3",
      links: [
        {
          slug: "/",
          id: 1,
          item: "lien a",
        },
        {
          slug: "/",
          id: 2,
          item: "lien b",
        },
        {
          slug: "/",
          id: 3,
          item: "lien c",
        },
        {
          slug: "/",
          id: 4,
          item: "lien d",
        },
      ],
    },
  ];

  return (
    <footer>
      <Wrapper className="display">
        {datas.map((obj) => (
          <div key={obj.title}>
            <li>{obj.title}</li>
            <ul>
              {obj.links.map((link) => (
                <li key={link.id}>{link.item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* {objs.map((obj) => (
          <FooterColomn key={obj.title} title={obj.title} datas={obj.links} />
        ))} */}
      </Wrapper>
    </footer>
  );
}
const Wrapper = styled.ul``;
