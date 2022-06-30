import React from "react";
import { Link } from "react-router-dom";
import TitleSection from "./../../TitleSection";

export default function ToolBox() {
  const datas = [
    {
      ico: "ico11.svg",
      title: "Trouver sa convention collective",
      text: "Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.",
      call: "Consulter",
      slug: "/",
      id: 1,
    },
    {
      ico: "ico12.svg",
      title: "Trouver sa convention collective",
      text: "Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.",
      call: "Consulter",
      slug: "/",
      id: 2,
    },
    {
      ico: "ico13.svg",
      title: "Trouver sa convention collective",
      text: "Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.",
      call: "Consulter",
      slug: "/",
      id: 3,
    },
    {
      ico: "ico14.svg",
      title: "Trouver sa convention collective",
      text: "Recherchez une convention collective par Entreprise, SIRET, Nom ou numéro IDCC.",
      call: "Consulter",
      slug: "/",
      id: 4,
    },
  ];
  return (
    <div>
      <TitleSection
        title="Boîte à outils"
        subtitle="Trouvez des réponses personnalisées selon votre situation"
      />
      <div>
        {datas.map((data) => (
          <div key={data.id}>
            <img src={data.ico} alt={data.alt} />
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <Link to={data.slug}>
              <div>
                <span>{data.call}</span>
                <img src="ico10.svg" alt="arrow" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
