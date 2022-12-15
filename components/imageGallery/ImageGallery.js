import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination, Autoplay } from "swiper"
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    Frame,
    ImgContainer,
    Img,
    VideoContainer,
    Video,
    AnchorOverlay,
    SectionTitle,
    HoverableArea,
} from './Elements'
import SwiperButtons from '../swiperButtons/SwiperButtons'

const ImageGallery = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.imageGallery.title}</SectionTitle>
                    <HoverableArea>
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
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            pauseOnMouseEnter={true}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            modules={[Grid, Pagination, Autoplay]}
                            className="imageGallerySwyper"
                        >
                            {
                                content.imageGallery.img.map((item) => {

                                    if (item.isVideo) {
                                        console.log('true')
                                        return (
                                            <SwiperSlide key={item.src}>
                                                <Frame >
                                                    <AnchorOverlay
                                                        href={item.url}
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
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                />
                                                <ImgContainer>
                                                    <Img src={item.src} alt={item.alt} fill />
                                                </ImgContainer>
                                            </Frame>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </HoverableArea>
                    <SwiperButtons swiperRef={swiperRef} />
                </Inner>
            }
        </Section>
    )
}

export default ImageGallery