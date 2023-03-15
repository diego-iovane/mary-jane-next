import { GetContentContext } from '../../context/ContentContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectFade, Navigation, Pagination } from 'swiper'
import PrimaryButton from '../buttons/PrimaryButton'
import {
  HeadSection,
  HeadBg,
  Body,
  Inner,
  LeftContent,
  Title,
  TitleAlt,
  Text,
  ButtonContainer,
  RightContent,
  SwiperContainer,
  ImageContainer,
  Img,
} from './Elements'

const SponsoringPage = () => {

  // const { content } = GetContentContext()[]

  const swiperImages = [
    {
      src: "/images/rest-bg.jpg",
    },
    {
      src: "/images/rest-bg.jpg",
    },
    {
      src: "/images/rest-bg.jpg",
    },
    {
      src: "/images/rest-bg.jpg",
    },
  ]

  return (
    <>
      <HeadSection>
        {/* CHANGE BG IMAGE FOR THE ADECUATE ONE */}
        <HeadBg src="/temp/contact-media-header-image.png" fill />
      </HeadSection>
      <Body>
        <Inner>
          <LeftContent>
            <Title>Sponsoring</Title>
            <Text>Are you looking to enhance your Mary Jane Berlin experience and take your brand to the next level? Each year companies expand their presence at the expo with the help of printed banners, sponsor opportunities for our beach festival and hoppetosse, see what fits your brand the best and get in contact with us for a tailor made sponsorship</Text>
            <ButtonContainer href="/">
              <PrimaryButton>Sponsoring Packages</PrimaryButton>
            </ButtonContainer>
          </LeftContent>
          <RightContent>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Navigation, Pagination]}
              className="sponsoringSwiper"
            >
              {
                swiperImages.map(slide => {
                  return (
                    <SwiperSlide key={slide.src}>
                      <ImageContainer>
                        <Img src={slide.src} fill />
                      </ImageContainer>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </RightContent>
        </Inner>
        <Inner>
          <LeftContent>
            <TitleAlt>Foyer Sponsoring</TitleAlt>
            <Text>Take the opportunity to sponsor our super exclusive foyer section, be creative and let the ideas flow of how you can completely customize this foyer into a brand experence that your business partners and customers will never forget!</Text>
            <ButtonContainer href="/">
              <PrimaryButton>Foyer Hall</PrimaryButton>
            </ButtonContainer>
          </LeftContent>
          <RightContent>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Navigation, Pagination]}
              className="foyerSponsoringSwiper"
            >
              {
                swiperImages.map(slide => {
                  return (
                    <SwiperSlide key={slide.src}>
                      <ImageContainer>
                        <Img src={slide.src} fill />
                      </ImageContainer>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </RightContent>
        </Inner>
      </Body>
    </>
  )
}

export default SponsoringPage