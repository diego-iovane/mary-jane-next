import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectFade, Pagination } from 'swiper'
import PrimaryButton from '../buttons/PrimaryButton'
import SwiperButtons from './SwiperButtons/SwiperButtons'
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
  ImageContainer,
  Img,
} from './Elements'

const SponsoringPage = ({ gallery, sponsoringContent, foyerContent, foyerGallery, bg }) => {

  const swiperRef = useRef()
  const swiperAltRef = useRef()

  return (
    <>
      <HeadSection>
        <HeadBg src={bg.sourceUrl} alt={bg.altText} fill />
      </HeadSection>
      <Body>
        <Inner>
          <LeftContent>
            <Title>{sponsoringContent.title}</Title>
            <Text>{sponsoringContent.text}</Text>
            <ButtonContainer href={sponsoringContent.cta.url}>
              <PrimaryButton>{sponsoringContent.cta.title}</PrimaryButton>
            </ButtonContainer>
          </LeftContent>
          <RightContent>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Pagination]}
              className="sponsoringSwiper"
            >
              {
                gallery.map(slide => {
                  return (
                    <SwiperSlide key={slide.sourceUrl}>
                      <ImageContainer>
                        <Img src={slide.sourceUrl} alt={slide.altText} fill />
                      </ImageContainer>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <SwiperButtons swiperRef={swiperRef} />
          </RightContent>
        </Inner>
        <Inner>
          <LeftContent>
            <TitleAlt>{foyerContent.title}</TitleAlt>
            <Text>{foyerContent.text}</Text>
            <ButtonContainer href={foyerContent.cta.url}>
              <PrimaryButton>{foyerContent.cta.title}</PrimaryButton>
            </ButtonContainer>
          </LeftContent>
          <RightContent>
            <Swiper
              ref={swiperAltRef}
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Pagination]}
              className="foyerSponsoringSwiper"
            >
              {
                foyerGallery.map(slide => {
                  return (
                    <SwiperSlide key={slide.sourceUrl}>
                      <ImageContainer>
                        <Img src={slide.sourceUrl} alt={slide.altText} fill />
                      </ImageContainer>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <SwiperButtons swiperRef={swiperAltRef} />
          </RightContent>
        </Inner>
      </Body>
    </>
  )
}

export default SponsoringPage