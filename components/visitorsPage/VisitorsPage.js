import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import Features from './Features/Features'
import GreenBoxSection from './GreenBoxSection/GreenBoxSection'
import {
  HeroImage,
  Section,
  HeroTitle,
  Overlay,
  HeroContent,
} from './Elements'

const VisitorsPage = () => {

  const { content } = GetContentContext()

  return (
    <>
      {
        Object.entries(content).length !== 0 &&
        <>
          <Section>
            <HeroImage
              src={content.visitorsPage.heroImg.src}
              alt={content.visitorsPage.heroImg.alt}
              fill
            />
            <Overlay />
            <HeroContent>
              <HeroTitle dangerouslySetInnerHTML={{ __html: content.visitorsPage.title }} />
            </HeroContent>
          </Section>
          <GreenBoxSection />
          <Features />
        </>
      }
    </>
  )
}

export default VisitorsPage