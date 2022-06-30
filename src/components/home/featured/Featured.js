import React from "react";
import styled from "styled-components";
import TitleSection from "../../TitleSection";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  const features = [
    {
      categorie: "dossier",
      title: "Covid-19 : fin du protocole sanitaire",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corporis dolorum natus veritatis iure ex.",
      id: "a",
    },
    {
      categorie: "salaire",
      title: "Salaire brut/net",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corporis dolorum natus veritatis iure ex.",
      id: "b",
    },
    {
      categorie: "condition de travail",
      title: "Chaleur et canicule au travail : les précautions à prendre",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corporis dolorum natus veritatis iure ex.",
      id: "c",
    },
    {
      categorie: "congés pour événement familiale",
      title: "Les congés pour événements familiaux ",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corporis dolorum natus veritatis iure ex.",
      id: "d",
    },
  ];
  let title = "A la une";
  return (
    <WrapperFeatures>
      <TitleSection title={title} />
      <div className="features-container">
        {features.map((feature) => (
          <FeaturedCard
            categorie={feature.categorie}
            title={feature.title}
            text={feature.text}
            key={feature.id}
          />
        ))}
      </div>
    </WrapperFeatures>
  );
}
const WrapperFeatures = styled.div`
  text-align: center;
  margin-bottom: 10rem;
  .features-container {
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 0.5rem;
  }
`;
