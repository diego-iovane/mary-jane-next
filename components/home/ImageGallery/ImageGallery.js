import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Grid, Pagination, Autoplay, Navigation } from "swiper"
import { GetContentContext } from '../../../context/ContentContext'
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

const ImageGallery = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <HoverableArea>
                        <DesktopSwiper>
                            
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
                                // autoplay={{
                                //     delay: 2500,
                                //     disableOnInteraction: true,
                                // }}
                                // navigation={true}
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
                                    content.imageGallery.img.map((item) => {

                                        if (item.isVideo) {
                                            return (
                                                <SwiperSlide key={item.src}>
                                                    <Frame >
                                                        <AnchorOverlay
                                                            // href={item.url}
                                                            href="https://www.instagram.com/mary_jane_berlin/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        />
                                                        <VideoContainer>
                                                            <Video autoPlay loop muted playsInline>
                                                                <source src={item.src} type='video/mp4' />
                                                            </Video>
                                                        </VideoContainer>
                                                    </Frame>
                                                </SwiperSlide>
                                            )
                                        }

                                        return (
                                            <SwiperSlide key={item.src}>
                                                <Frame >
                                                    <AnchorOverlay
                                                        // href={item.url}
                                                        href="https://www.instagram.com/mary_jane_berlin/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    />
                                                    <ImgContainer>
                                                        <Img src={item.src} alt="mary jane berlin experience" fill />
                                                    </ImgContainer>
                                                </Frame>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </DesktopSwiper>
                    </HoverableArea>
                    <ButtonsContainer>
                        <SwiperButtons swiperRef={swiperRef} />
                    </ButtonsContainer>
                    <CtaContainer>
                        <CtaTitle>Want to join? </CtaTitle>
                        {/* <CtaSubTitle>Get your tickets for a special price</CtaSubTitle> */}
                        <ButtonContainer>
                            <PrimaryButton>
                                <a
                                    href={content.hero.button.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Get your discounted tickets here
                                </a>
                            </PrimaryButton>
                        </ButtonContainer>
                    </CtaContainer>
                </Inner>
            }
        </Section>
    )
}

export default ImageGallery