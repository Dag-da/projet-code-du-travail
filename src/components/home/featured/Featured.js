import React from 'react'
import FeaturedCard from './FeaturedCard'

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
        }
    ]
  return (

    <div>
        {features.map((feature) => (
            <div key={feature.id}>
            <FeaturedCard categorie={feature.categorie} title={feature.title} text={feature.text} />
            </div>
        ))}
    </div>
  )
}
