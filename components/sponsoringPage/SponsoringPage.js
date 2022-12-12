import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
  HeroImage,
  HeroSection,
  HeroTitle,
  Overlay,
  Inner,
  Title,
  Text,
  ImageContainer,
  Img,
} from './Elements'

const SponsoringPage = () => {

  const { content } = GetContentContext()

  return (
    <>
      {
        Object.entries(content).length !== 0 &&
        <>
          <HeroSection>
            <HeroImage
              src={content.sponsoringPage.heroImg.src}
              alt={content.sponsoringPage.heroImg.alt}
              fill
            />
            <Overlay />
            <HeroTitle>{content.sponsoringPage.title}</HeroTitle>
          </HeroSection>
          <Inner>
            <Title>{content.sponsoringPage.subTitle}</Title>
            <Text>
                <a
                    href={content.sponsoringPage.pdfImg.url}
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    {content.sponsoringPage.text}
                </a>
            </Text>
          </Inner>
        </>
      }
    </>
  )
}

export default SponsoringPage