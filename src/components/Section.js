import React from 'react'
import TitleSection from './TitleSection'

export default function Section() {
  return (
    <div>
        <TitleSection />
        {pages.map((page) => (
          <NavItems slug={page.slug} key={page.id} page={page.item} />
        ))}
        <Button />
    </div>
  )
}

