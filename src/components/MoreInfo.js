import React from 'react'
// import Button from './Button'
import TitleSection from './TitleSection'

export default function MoreInfo() {
    const info = {
        a: "Besoin de plus d'information ?",
        b: "Les services du ministère du Travail en région informent, conseillent et orientent les salariés et les employeurs du secteur privé sur leurs questions en droit du travail.",
        c: "/",
        d: "Contacter nos services en région",
    }
  return (
    <div>
        <TitleSection title={info.a} subtitle={info.b} />
        {/* <Button slug={info.c} call={info.d} /> */}
    </div>
  )
}
