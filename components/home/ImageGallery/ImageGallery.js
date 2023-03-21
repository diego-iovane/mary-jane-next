import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Grid, Pagination, Autoplay, Navigation } from "swiper"
import SwiperButtons from '../../swiperButtons/SwiperButtons'
import PrimaryButton from '../../buttons/PrimaryButton'
import {
    Section,
    Inner,
    Frame,
    ImgContainer,
    Img,
    VideoContainer,
    Video,
    AnchorOverlay,
    HoverableArea,
    ButtonsContainer,
    CtaContainer,
    CtaTitle,
    CtaSubTitle,
    ButtonContainer,
    DesktopSwiper,
} from './Elements'

const ImageGallery = ({ media, content, language }) => {

    const swiperRef = useRef()
    const[hyMedia, setHyMedia] = useState([])

    const text = language === 'en' ? 
    {
        text: content.galleryCtaTextEn,
        cta: content.galleryCtaButtonEn,
    } : 
    {
        text: content.galleryCtaTextDe,
        cta: content.galleryCtaButtonDe,
    }

    console.log(content)

    useEffect(() => {
        setHyMedia(media)
    }, [])

    return (
        <Section>
                <Inner>
                    <HoverableArea>
                        <DesktopSwiper>
                            {
                                hyMedia.length !== 0 ?
                                <Swiper
                                    ref={swiperRef}
                                    slidesPerView={1}
                                    breakpoints={{
                                        800: {
                                            slidesPerView: 3,
                                        },
                                        650: {
                                            slidesPerView: 2,
                                        },
                                        400: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                    grid={{
                                        rows: 1,
                                    }}
                                    spaceBetween={30}
                                    slidesPerGroup={3}
                                    loopFillGroupWithBlank={false}
                                    pauseOnMouseEnter={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    loop={true}
                                    modules={[Grid, Pagination, Autoplay, Navigation]}
                                    className="imageGallerySwyper"
                                >
                                    {
                                        hyMedia.map((item) => {
    
                                            if (item.node.video) {
                                                return (
                                                    <SwiperSlide key={item.node.videoUrl}>
                                                        <Frame >
                                                            <AnchorOverlay
                                                                href="https://www.instagram.com/mary_jane_berlin/"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            />
                                                            <VideoContainer>
                                                                <Video autoPlay loop muted playsInline>
                                                                    <source src={item.node.videoUrl} alt="" type='video/mp4' />
                                                                </Video>
                                                            </VideoContainer>
                                                        </Frame>
                                                    </SwiperSlide>
                                                )
                                            }
    
                                            return (
                                                <SwiperSlide key={item.node.media.sourceUrl}>
                                                    <Frame >
                                                        <AnchorOverlay
                                                            href="https://www.instagram.com/mary_jane_berlin/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        />
                                                        <ImgContainer>
                                                            <Img src={item.node.media.sourceUrl} alt={item.node.media.altText} fill />
                                                        </ImgContainer>
                                                    </Frame>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper> : null
                            }
                        </DesktopSwiper>
                    </HoverableArea>
                    <ButtonsContainer>
                        <SwiperButtons swiperRef={swiperRef} />
                    </ButtonsContainer>
                    <CtaContainer>
                        <CtaTitle>{text.text}</CtaTitle>
                        {/* <CtaSubTitle>Get your tickets for a special price</CtaSubTitle> */}
                        <ButtonContainer>
                            <PrimaryButton>
                                <a
                                    href={text.cta.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {text.cta.text}
                                </a>
                            </PrimaryButton>
                        </ButtonContainer>
                    </CtaContainer>
                </Inner>
        </Section>
    )
}

export default ImageGallery