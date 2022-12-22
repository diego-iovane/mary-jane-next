import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination, Autoplay, Navigation } from "swiper"
import { GetContentContext } from '../../context/ContentContext'
import SectionsButtons from './SectionsButtons/SectionsButtons'
import {
  Section,
  HeroImage,
  HeroSection,
  HeroTitle,
  Overlay,
  Inner,
  Title,
  Text,
  InfoSection,
  SectionElement,
  ImgContainer,
  Img,
  ButtonsContainer,
  FileButton,
  FilesContainer,
  FileContainer,
  FileName,
  FileIcon,
  HeroContent,
  IllustrationsSectionContainer,
  IllustrationsContainer,
  IllustrationInner,
  Illustration,
  Button,
} from './Elements'


const ExhibitorsPage = () => {

  const { content } = GetContentContext()

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
            <HeroContent>
              <HeroTitle>{content.exhibitorsPage.title}</HeroTitle>
            </HeroContent>
          </HeroSection>
          <IllustrationsSectionContainer>
            <IllustrationsContainer>
              <IllustrationInner
                top="0rem"
                left="-07rem"
              >
                <Illustration
                  src={content.newsletterSection.exhibitIllustration.src}
                  alt={content.newsletterSection.exhibitIllustration.alt}
                  fill
                />
                <Button
                  href={content.exhibitorsPage.exhibitorButton.href}
                  top="14rem"
                  left="14rem"
                >
                  {content.exhibitorsPage.exhibitorButton.title}
                </Button>
              </IllustrationInner>
              <IllustrationInner
                top="3rem"
                left="-21rem"
              >
                <Illustration
                  src={content.newsletterSection.visitIllustration.src}
                  alt={content.newsletterSection.visitIllustration.alt}
                  fill
                />
                <Button
                  href={content.exhibitorsPage.exhibitButton.href}
                  top="15rem"
                  left="0rem"
                >{content.exhibitorsPage.exhibitButton.title}</Button>
              </IllustrationInner>
            </IllustrationsContainer>
          </IllustrationsSectionContainer>
          <SectionsButtons />
          {/* LOCATION PICS */}
          <Section id="location-pics" bgColor="var(--black)">
            <Inner>
              <Title color="#ffffff">{content.exhibitorsPage.locationImagesSection.title}</Title>
              <Swiper
                // ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination, Autoplay]}
                className="locationPicsSwyper"
              >
                {
                  content.exhibitorsPage.locationImagesSection.imgs.map((item) => {
                    return (
                      <SwiperSlide key={item.src}>
                        <ImgContainer>
                          <Img src={item.src} alt={item.alt} fill />
                        </ImgContainer>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
              <ButtonsContainer>
                <FileButton
                  href={content.exhibitorsPage.hallPlan.hallPlan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.exhibitorsPage.hallPlan.hallPlan.title}
                </FileButton>
                <FileButton
                  href={content.exhibitorsPage.hallPlan.priceList.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.exhibitorsPage.hallPlan.priceList.title}
                </FileButton>
              </ButtonsContainer>
            </Inner>
          </Section>
          {/* FOYER */}
          <Section id="foyer">
            <Inner>
              <Title color="var(--black)">{content.exhibitorsPage.foyer.title}</Title>
              <Text color="var(--black)" dangerouslySetInnerHTML={{ __html: content.exhibitorsPage.foyer.text }} />
              <Swiper
                // ref={swiperRef}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination, Navigation, Autoplay]}
                className="locationPicsSwyper"
              >
                {
                  content.exhibitorsPage.foyer.imgs.map((item) => {
                    return (
                      <SwiperSlide key={item.src}>
                        <ImgContainer>
                          <Img src={item.src} alt="foyer plan images" fill />
                        </ImgContainer>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
              <ButtonsContainer>
                <FileButton
                  color="var(--black)"
                  href={content.exhibitorsPage.foyer.files.foyerOne.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.exhibitorsPage.foyer.files.foyerOne.title}
                </FileButton>
                <FileButton
                  color="var(--black)"
                  href={content.exhibitorsPage.foyer.files.foyerTwo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.exhibitorsPage.foyer.files.foyerTwo.title}
                </FileButton>
              </ButtonsContainer>
            </Inner>
          </Section>
          {/* GUIDE */}
          <Section id="guides">
            <Inner>
              <Title color="var(--black)">{content.exhibitorsPage.guides.title}</Title>
              <FilesContainer>
                {
                  content.exhibitorsPage.guides.guides.map(item => {
                    return (
                      <FileContainer key={item.src}>
                        <FileIcon
                          href={item.src}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z" /></svg>
                        </FileIcon>
                        <FileName>{item.title}</FileName>
                      </FileContainer>
                    )
                  })
                }
              </FilesContainer>
            </Inner>
          </Section>
        </>
      }
    </>
  )
}

export default ExhibitorsPage