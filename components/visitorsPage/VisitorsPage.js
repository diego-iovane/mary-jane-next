import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import InstaCard from '../instaCard/InstaCard'
import {
  HeroImage,
  Section,
  BdSection,
  HeroTitle,
  Overlay,
  Inner,
  Left,
  Right,
  HeroContent,
  GreenBox,
  GreenBoxText,
  HandContainer,
  HandInner,
  Hand,
  FeaturesList,
  Item,
  IconContainer,
  Icon,
  FeaturesText,
  FeaturesImg,
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
          <BdSection>
            <Inner>
              <Left>
                <GreenBox>
                  <GreenBoxText>

                    {content.visitorsPage.greenBoxText}
                  </GreenBoxText>
                </GreenBox>
                <HandContainer>
                  <HandInner
                    rt="25deg"
                  >
                    <Hand
                      src={content.visitorsPage.handIllustration.src}
                      alt={content.visitorsPage.handIllustration.alt}
                      fill
                    />
                  </HandInner>
                </HandContainer>
              </Left>
              <Right>
                <InstaCard
                  src={content.visitorsPage.instaCardOne.src}
                  alt={content.visitorsPage.instaCardOne.src}
                  x="5rem"
                  y="12rem"
                  rt="5"
                />
                <InstaCard
                  src={content.visitorsPage.instaCardTwo.src}
                  alt={content.visitorsPage.instaCardTwo.src}
                  x="0rem"
                  y="2rem"
                  rt="25"
                />
              </Right>
            </Inner>
          </BdSection>
          <BdSection bg="#F3F3F3">
            <Inner>
              <FeaturesList>
                {
                  content.visitorsPage.features.map(item => {
                    return (
                      <Item key={item}>
                        <IconContainer>
                          <Icon
                            src={content.visitorsPage.featuresIcon}
                            alt="features icon"
                            fill
                          />
                        </IconContainer>
                        <FeaturesText>
                          {item}
                        </FeaturesText>
                      </Item>
                    )
                  })
                }
              </FeaturesList>
            </Inner>
          </BdSection>
          <BdSection>
            <Inner>
              <InstaCard
                src={content.visitorsPage.instaCardOne.src}
                alt={content.visitorsPage.instaCardOne.src}
                x="-11rem"
                y="30rem"
                rt="18"
              />
              <InstaCard
                src={content.visitorsPage.instaCardTwo.src}
                alt={content.visitorsPage.instaCardTwo.src}
                x="-13rem"
                y="17rem"
                rt="-5"
              />
            </Inner>
          </BdSection>
        </>
      }
    </>
  )
}

export default VisitorsPage