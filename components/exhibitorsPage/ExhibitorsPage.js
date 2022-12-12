import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
  HeroImage,
  HeroSection,
  HeroTitle,
  Overlay,
  Content,
  Inner,
  Title,
  Text,
  TextDecoration,
  InfoSection,
  SectionsTagContainer,
  SectionsTags,
  SectionTag,
  SectionElement,
} from './Elements'

const ExhibitorsPage = () => {

  const { content } = GetContentContext()

  console.log(content)

  return (
    <>
      {
        Object.entries(content).length !== 0 &&
        <>
          <HeroSection>
            <HeroImage
              src={content.exhibitorsPage.heroImg.src}
              alt={content.exhibitorsPage.heroImg.alt}
              fill
            />
            <Overlay />
            <HeroTitle>{content.exhibitorsPage.title}</HeroTitle>
          </HeroSection>
          <Inner>
            <InfoSection id="info">
              {
                content.exhibitorsPage.info.map(item => {
                  return (
                    <SectionElement key={item.title}>
                      <Title>{item.title}</Title>
                      <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                    </SectionElement>
                  )
                })
              }
            </InfoSection>
          </Inner>
        </>
      }
    </>
  )
}

export default ExhibitorsPage