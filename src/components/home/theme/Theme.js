import React from "react";

export default function Theme() {
  const themes = [
    {
      ico: "ico1.svg",
      title: "Embauche et contrat de travail",
      alt: "boup",
      id: "a",
    },
    {
      ico: "ico2.svg",
      title: "Salaire et rémunération",
      alt: "boup",
      id: "b",
    },
    {
      ico: "ico3.svg",
      title: "Temps de travail",
      alt: "boup",
      id: "c",
    },
    {
      ico: "ico4.svg",
      title: "Congés et repos",
      alt: "boup",
      id: "d",
    },
    {
      ico: "ico5.svg",
      title: "Emploi et foramtion professionnelle",
      alt: "boup",
      id: "e",
    },
    {
      ico: "ico6.svg",
      title: "Sainté, sécurité et condition de travail",
      alt: "boup",
      id: "f",
    },
    {
      ico: "ico7.svg",
      title: "Réprésentation ddu personnel et négociation collective",
      alt: "boup",
      id: "g",
    },
    {
      ico: "ico8.svg",
      title: "Départ de l'entreprise",
      alt: "boup",
      id: "h",
    },
    {
      ico: "ico9.svg",
      title: "Conflits au travail et contrôle de la réglementation",
      alt: "boup",
      id: "i",
    },
  ];
  return (
    <>
      {themes.map((theme) => (
        <div key={theme.id}>
        <div>
          <img src={theme.ico} alt={theme.alt} />
        </div>
        <h3>{theme.title}</h3>
      </div>
      ))}
    </>
  );
}
