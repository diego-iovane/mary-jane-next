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

const VisitorsPage = () => {

  const { content } = GetContentContext()

  console.log(content.visitorsPage)

  return (
    <>
      {
        Object.entries(content).length !== 0 &&
        <>
          <HeroSection>
            <HeroImage
              src={content.visitorsPage.heroImg.src}
              alt={content.visitorsPage.heroImg.alt}
              fill
            />
            <Overlay />
            <HeroTitle>{content.visitorsPage.title}</HeroTitle>
          </HeroSection>
          <SectionsTagContainer>
            <Inner>
              <SectionsTags>
                {
                  content.visitorsPage.sections.map(item => {
                    return (
                      <SectionTag key={item.title} href={item.url}>
                        {item.title}
                      </SectionTag>
                    )
                  })
                }
              </SectionsTags>
            </Inner>
          </SectionsTagContainer>
          <Inner>
            <InfoSection id="info">
              {
                content.visitorsPage.info.map(item => {
                  return (
                    <SectionElement key={item.title}>
                      <Title>{item.title}</Title>
                      <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                    </SectionElement>
                  )
                })
              }
            </InfoSection>
            <InfoSection id="data">
              {
                content.visitorsPage.data.map(item => {
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

export default VisitorsPage